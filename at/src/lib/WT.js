import React from 'react';
import {Packet, _JSON, _M, _S, _N} from "./solon.js";


const WT = {
    Mbrno:0,
    socket:null,
    eventListeners : [],
    
    on : function (eventType, handler) {
        this.eventListeners.push({
            eventType: eventType,
            handler: handler
        });
    },

    off : function (eventType) {
        var self = this;
        for (var i = 0; i < this.eventListeners.length; i++) {
            var evt = this.eventListeners[i];
            if (evt.eventType === eventType) {
                this.eventListeners.splice(i, 1);
                self.off(eventType); //recursive
                break;
            }
        }
    },

    fire : function (eventType, evt) {
        evt = evt || {};
        //evt.type = eventType;

        for (var i = 0; i < this.eventListeners.length; i++) {
            var event = this.eventListeners[i];
            if (event.eventType === eventType) {
                try {
                    event.handler.call(this, evt);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        evt = null;
    }
}

export const WTContext = React.createContext(
    WT
);