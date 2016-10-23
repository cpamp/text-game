import {Item} from '../Item';

export class Inventory {
    public items: Item[];

    constructor(items: Item[]) {
        this.items = items;
    }
}