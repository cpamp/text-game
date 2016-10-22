import {Tile} from './Tile';

export class Map {
    public tiles: Tile[][];

    constructor(tiles: Tile[][]) {
        this.tiles = tiles;
    }
}