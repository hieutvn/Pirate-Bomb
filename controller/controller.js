/*
    Handles controlls

*/

import { Player } from '../model/player.js';

export { Controller };

class Controller {

    constructor() {

        this.keyState = {

            'w'     : false,
            's'     : false,
            'd'     : false,
            'a'     : false,
            ' '     : false 
        }

        this.playerState = {

            idle : undefined,
            running : undefined,
            ducking : undefined,
            jumping : undefined,
            throwing : undefined,
            colliding : undefined
        }

        this.keyEvents();
    }

    keyEvents() {

        document.addEventListener('keydown', (event) => this.keyEventHandler(event, true));
        document.addEventListener('keyup', (event) => this.keyEventHandler(event, false));
    }

    keyEventHandler(event, isKeyDown) {

        const key = event.key.toLowerCase();

        if (this.keyState.hasOwnProperty(key)) {

            this.keyState[key] = isKeyDown; // returns true
            this.updateMovement(key);
        }
        else {

            return;
        }
    }

    updateMovement(key) {

        switch (key) {

            case 'd': 

                
            break;
        }
    }

    
}


class Playable extends Player {


    constructor() {

        super();


    }
}