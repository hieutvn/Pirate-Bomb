import { canvas, canvasHeight, canvasWidth } from '../model/res.js';

export { InteractiveObject };

class InteractiveObject {

        constructor() {

            this.object_position    = { x: 0, y: 0 };
            this.object_dim         = { width: 0, height: 0 };             


            this.gravity_velocity   = { x: 8, y: 2 };
            this.gravity_pull       = 1.5;
            
            this.ground            = canvasHeight;
        }
    
        objectGravity() {
                
            this.object_position.y += this.gravity_velocity.y;

            if (this.object_position.y + this.gravity_velocity.y + this.object_dim.height <= this.ground - this.object_dim.height) {

                this.gravity_velocity.y += this.gravity_pull;
            }
            else {

                this.gravity_velocity.y = 0;
            }
                
            //tile.map = 01, 03 === collision
    
        }
    
    
        objectColliding() {
    
    
        }
    
        objectOverlapping(obj_1, obj_2) {
    
    
        }
}