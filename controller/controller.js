/*
    Handles controlls

*/

import { Player } from '../model/player.js';

export { Controller };

class Controller {

    constructor(attributes) {

        this.keyState = {

            'w'     : false,
            's'     : false,
            'd'     : false,
            'a'     : false,
            ' '     : false 
        }

        this.playerState = {

            idle        : false,
            running     : false,
            ducking     : false,
            jumping     : false,
            throwing    : false,
            colliding   : false
        }

        this.attributes = attributes;

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

        if (!this.attributes) {

            console.error("Not loaded yet.");
        }

        switch(key) {

            case 'd': 

                if (this.keyState.d) {

                    console.log("d pressed");
                    this.attributes.position.x += 5;

                }
            break;

            case 'a':

                if (this.keyState.a) {

                    console.log("a pressed");
                }
            break;

            case 's':

                if (this.keyState.s) {

                    console.log("s pressed");
                }
            break;

            case 'w':

                if (this.keyState.w) {

                    console.log('w');
                }
            break;
        }
    }

    
}