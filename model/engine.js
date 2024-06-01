/* 
    handles: 
    - Sprite of (objects, player characters, items),
    - Gravity of ("")
    - Tilemapping
    - Audio, sounds
*/

import { canvas, ctx } from './res.js';


export { Engine };

class Engine {

    constructor() {

        /* 
            this.audio = this.audio();
            this.gravity = this.gravity();
            this.sprites = this.sprites();
        
        */
       this.velocity = { x: 8, y: 2 };
       //this.gravity = this.playerGravity();


       // variables related to engine
       const gravityPull       = 1.5;
       const ground        = canvas.height;
    }

    
    render() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.requestAnimationFrame(render);

    }
    
    playerGravity(player) {

        player.attributes.position.y += this.velocity.y;

        if (player.attributes.position.y + this.velocity.y + player.attributes.height <= this.ground) {

            this.velocity.y += this.gravity;
        } 
        else {

            this.velocity.y = 0;
        }
        

        //tile.map = 01, 03 === collision

    }

    objectColliding() {


    }

    objectOverlapping(obj_1, obj_2) {


    }

    runEngine(player) {

        this.playerGravity(player);
    }
}


class Gravity {

    constructor() {

        this.velocity = { x: 8, y: 2 };

        // variables related to gravity
       const gravityPull       = 1.5;
       const ground            = canvas.height;
    }

    playerGravity(player) {

        player.attributes.position.y += this.velocity.y;

        if (player.attributes.position.y + this.velocity.y + player.attributes.height <= this.ground) {

            this.velocity.y += this.gravity;
        } 
        else {

            this.velocity.y = 0;
        }
        

        //tile.map = 01, 03 === collision

    }


    objectColliding() {


    }

    objectOverlapping(obj_1, obj_2) {


    }
}