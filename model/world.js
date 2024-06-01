import { canvasWidth, canvasHeight } from '../model/res.js';
import { Player } from '../model/player.js';
import { Engine } from '../model/engine.js';
/*
    World = wenn Spiel gestartet wird. 
    Alles was eine Runde braucht

    Spieler = Check -> Menu


    


*/

export { World };

class World {

    constructor() {

        //this.bounds = this.bounds(); ->
        //this.platforms = platforms[];
        //this.engine       = new Engine(); 
        this.playersArr     = []; 
        this.itemsArr       = [];
        this.platformsArr   = [];
    }

    bounds() {



    }

    addObj(obj) {

        switch (obj.constructor.name) {

            case 'Player': 

                this.playersArr.push(obj);
            break;

            case 'Item': 

                this.itemsArr.push(obj);
            break;

            case 'Platform': 

                this.platformsArr.push(obj);
            break;

        }

        
        console.log(this.playersArr);
    }
}

/*
    12 x 10
    this/const collisionMap = [  
                                01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01,
                                01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
                                01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
                                01, 03, 03, 00, 00, 00, 00, 00, 00, 03, 03, 01,
                                01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
                                01, 00, 00, 00, 00, 00  , 03, 03, 00, 00, 00, 01,
                                01, 00, 03, 03, 00, 00, 00, 00, 00, 03, 03, 01,
                                01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
                                01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
                                01, 01, 01, 02, 02, 01, 01, 02, 02, 01, 01, 01
                                                                                ];

    this.collisionMapWidth = 12;
    this.collisionMapHeight = 10;
    tile_size = 32;

    

*/



