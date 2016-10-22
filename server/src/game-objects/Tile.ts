import {Phase} from './Phase';

export class Tile {
    public name: string;
    public phase: Phase;

    constructor(name: string, phase: Phase) {
        this.name = name;
        this.phase = phase;
    }
}