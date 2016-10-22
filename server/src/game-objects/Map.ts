import {Tile} from './Tile';

export class Map {
    public name: string;
    public tiles: Tile[][];

    constructor(name: string, tiles: Tile[][]) {
        this.name = name;
        this.tiles = tiles;
    }
}