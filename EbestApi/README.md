
# react-native-ebest-api

## Getting started

`$ npm install react-native-ebest-api --save`

### Mostly automatic installation

`$ react-native link react-native-ebest-api`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ebest-api` and add `RNEbestApi.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNEbestApi.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNEbestApiPackage;` to the imports at the top of the file
  - Add `new RNEbestApiPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ebest-api'
  	project(':react-native-ebest-api').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-ebest-api/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ebest-api')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNEbestApi.sln` in `node_modules/react-native-ebest-api/windows/RNEbestApi.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Ebest.Api.RNEbestApi;` to the usings at the top of the file
  - Add `new RNEbestApiPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNEbestApi from 'react-native-ebest-api';

// TODO: What to do with the module?
RNEbestApi;
```
  