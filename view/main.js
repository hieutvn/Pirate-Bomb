/*
    Object declaration
    Running the game


*/

import { canvas, ctx, canvasWidth, canvasHeight } from "../model/res.js";
import { Player } from '../model/player.js';
import { Sprite } from '../model/sprite.js';
import { Engine } from '../model/engine.js';
import { World } from '../model/world.js';
import { Controller } from '../controller/controller.js';
import { Map } from '../model/map.js';
import { DataStorage } from "../data/datastorage.js";

const player            = new Player();
const engine            = new Engine();
const world             = new World();
const controller        = new Controller();
const map               = new Map({ 
                                    rows: 5, 
                                    columns: 10, 
                                    tileSize: { width: 10, height: 10}
                                    });

const database          = new DataStorage();                                    

document.addEventListener('DOMContentLoaded', () => {

    // keeps the sprites crisp on increased scale
    ctx.imageSmoothingEnabled = false;
    animate();
});

function animate() {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);


    player.update();
    //engine.runEngine(player);
    window.requestAnimationFrame(animate);
    
}

//console.log(map.createMap())


