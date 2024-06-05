export { Map };

class Map {

    constructor({ rows, columns, tileSize }) {

        this.rows       = rows;
        this.columns    = columns;
        this.tileSize   = { width: 0, height: 0};
        this.map     = this.createMap();
    }

    
    createMap() {

        const mapArr = [];

        for (let row = 0; row < this.rows; row++) {

            const rowArr = [];

            for (let column = 0; column < this.columns; column++) {

                rowArr.push(1);
            }

            mapArr.push(rowArr);
        }

        return mapArr;
    }


    addSprite({ sprite, row, column }) {

        if (row >= 0 && row < this.rows &&
            column >= 0 && column < this.columns) {

            return this.map[row][column] = sprite;
        }
        else {

            console.error('Invalid sprite position on the map.');
        }
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