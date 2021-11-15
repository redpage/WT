import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

import {
    Camera,
    CameraResultType,
    CameraSource,
    Photo
} from "@capacitor/camera";
import {Filesystem, Directory} from "@capacitor/filesystem";
import {Storage} from "@capacitor/storage";
import { Capacitor } from "@capacitor/core";
import { resultingClientExists } from "workbox-core/_private";

const PHOTO_STORAGE = "photos";

export interface UserPhoto {
    filepath: string;
    webviewPath: string;
}

export async function base64FromPath(path: string): Promise<string> {
    const resp = await fetch(path);
    const blob = await resp.blob();

    return new Promise((resolve, reject) => { 
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            if(typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject('method did not return a string');
            }
        }
        reader.readAsDataURL(blob);
    });
}

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);

    useEffect(()=>{
        const loadSaved = async () => {
            const {value} = await Storage.get({key: PHOTO_STORAGE});

            const photosInStorage = (value ? JSON.parse(value) : []) as UserPhoto[];

            if(!isPlatform('hybrid')) {
                for(let photo of photosInStorage) {
                    const file = await Filesystem.readFile({
                        path:photo.filepath,
                        directory: Directory.Data
                    });

                    photo.webviewPath = `data:image/jpeg;base64,$(file.data)`;
                }
            }
            setPhotos(photosInStorage);
        };
        loadSaved();
    }, []);

    const takePhoto = async () => {
        Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100  
        }).then(cameraPhoto => {
            const fileName = new Date().getTime() + '.jpeg';
            savePicture(cameraPhoto, fileName).then(savedFileImage=>{
                const newPhotos = [savedFileImage, ...photos];
                setPhotos(newPhotos);
                Storage.set({key:PHOTO_STORAGE, value:JSON.stringify(newPhotos)});
            }).catch(err=>{
                console.log("save", err);
            });
        }).catch(error=>{
            console.log(error);
        }); 
        // const cameraPhoto = await Camera.getPhoto({
        //     resultType: CameraResultType.Uri,
        //     source: CameraSource.Camera,
        //     quality: 100
        // });
        // const fileName = new Date().getTime() + '.jpeg';
        // const savedFileImage = await savePicture(cameraPhoto, fileName);
        // const newPhotos = [savedFileImage, ...photos];
        // setPhotos(newPhotos);
        // Storage.set({key:PHOTO_STORAGE, value:JSON.stringify(newPhotos)});
    };

    const savePicture = async (photo: Photo, fileName: string) : Promise<UserPhoto> => {
        let base64Data: string;
        if(isPlatform('hybrid')) {
            const file = await Filesystem.readFile({
                path: photo.path!
            })
            base64Data = file.data;
        } else {
            base64Data = await base64FromPath(photo.webPath!);
        }

        const savedFile = await Filesystem.writeFile({
            path: fileName ,
            data: base64Data ,
            directory: Directory.Data
        });

        if(isPlatform('hybrid')) {
            return {
                filepath: savedFile.uri,
                webviewPath: Capacitor.convertFileSrc(savedFile.uri)
            };
        } else {
            return {
                filepath: fileName,
                webviewPath: photo.webPath || ''
            };
        }
    };

    const deletePhoto = async (photo: UserPhoto) => {
        const newPhotos = photos.filter(p => p.filepath !== photo.filepath);

        Storage.set({key:PHOTO_STORAGE, value: JSON.stringify(newPhotos)});
        const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/')+1);
        await Filesystem.deleteFile({
            path: filename,
            directory: Directory.Data
        });
        setPhotos(newPhotos);
    };

    return {
        deletePhoto,
        photos,
        takePhoto
    };
}