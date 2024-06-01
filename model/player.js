/*
    Handles: 
    - Attr of each chars
    - Sprite of char
    - Actions of char

*/

import { InteractiveObject } from './interactiveobject.js';
import { Sprite } from './sprite.js';
import { DataStorage } from '../data/datastorage.js';

class Player extends InteractiveObject {

    constructor(/*sprite*/) {

        super();
        
        this.attributes = {

            width               : undefined,
            height              : undefined,
            imageSrc            : undefined,
            position            : undefined,
            frameSpeed          : undefined,
            frameTotalCount     : undefined,
            scale               : undefined,
            spriteCollection    : { undefined }
        };

        this.sprite = null;
        this.loadingState = true;


        // Functions
       this.storeSprite();
    }

    async createSprite() {
    
    try {
        const response = await fetch('player.json', 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const data = await response.json();

            this.attributes.width               = data.BombGuy.attributes.width,
            this.attributes.height              = data.BombGuy.attributes.height,
            this.attributes.imageSrc            = data.BombGuy.sprites.idle_dir_right.imageSrc, 
            this.attributes.position            = data.BombGuy.attributes.position, 
            this.attributes.frameSpeed          = data.BombGuy.attributes.frameSpeed,
            this.attributes.frameTotalCount     = data.BombGuy.sprites.idle_dir_right.frameTotalCount,
            this.attributes.scale               = data.BombGuy.attributes.scale;
            this.attributes.spriteCollection    = data.BombGuy.sprites;
            
            
            Object.entries(data).forEach(([key, value]) => {

                console.log(key, value.sprites);
                console.log(key, value.attributes);
            });




            // ASSIGN TO object_dim in interactiveobject.js
            this.object_dim.width       = this.attributes.width;
            this.object_dim.height      = this.attributes.height;
            this.object_position        = this.attributes.position;

            return new Sprite(
                                {
                                    imageSrc            : this.attributes.imageSrc, 
                                    position            : this.attributes.position, 
                                    frameSpeed          : this.attributes.frameSpeed,
                                    frameTotalCount     : this.attributes.frameTotalCount,
                                    scale               : this.attributes.scale, 
                                    spriteCollection    : this.attributes.spriteCollection
                                });
        }
    }
    catch (error) { console.error('Sprite creation failed.', error); }
    }

    async storeSprite() {

        try {

            this.sprite = await this.createSprite();
            this.loadingState = false;
        }
        catch (error) {

            console.error('Failed to create sprite.', error);
            this.loadingState = false;

        }

    }


    async update() {

        // LOADING SPRITE
        // Noch nicht sicher, ob loadingState gebraucht wird, sonst würde 1x in else springen, da es erst nicht geladen ist.
        if (this.loadingState) {

            console.log('Loading image..')
            return;
        }
        else if (this.sprite) {

            this.sprite.draw();
            this.sprite.animateFrames();       
 
            // ASSIGN GRAVITY TO PLAYER
            this.objectGravity();
 
        }
        else {

            console.error('Sprite not loaded yet.')
        }

    }

    async updateMovement(key) {


        switch (key) {

            case 'd': 

                this.attributes.position.x += Math.floor(5);
            break;
        }
    }







}






export { Player };