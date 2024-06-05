import { canvas, ctx } from "./res.js";

export { Sprite };



class Sprite {

    constructor({imageSrc, position, frameSpeed, frameTotalCount, scale}) {

        this.image              = new Image();
        this.image.src          = imageSrc;
        this.position           = position;
        this.frameSpeed         = frameSpeed,
        this.frameTotalCount    = frameTotalCount;
        this.scale              = scale;

        this.image.onload = () => {

            this.width = this.image.width;
            this.height = this.image.height;
        }

        this.image.onerror = (error) => { console.error('Failed to load image.', error); }


        this.frameCurrent       = 0;
        this.frameElapsed       = 0;
    }


    draw() {


        ctx.drawImage(

            this.image,
            this.frameCurrent * (this.image.width / this.frameTotalCount),
            0,
            this.image.width / this.frameTotalCount,
            this.image.height,
            this.position.x,
            this.position.y,
            this.scale * (this.image.width / this.frameTotalCount),
            this.scale * (this.image.height) 
        );


    }

    animateFrames() {

        this.frameElapsed++;
    
        if (this.frameElapsed % this.frameSpeed === 0) {

            if (this.frameCurrent < this.frameTotalCount - 1) {

                this.frameCurrent++;
            } 
            else {
                
                this.frameCurrent = 0;
            }
        }
    }

    update() {

        if (this.image.complete) {

            this.draw();
            this.animateFrames();
        }
    }
}
