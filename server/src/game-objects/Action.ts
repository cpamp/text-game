import {Command} from './Command';
import {Noun} from './Noun';
import {Item} from './Item';

export class Action {
    public command: Command;
    public noun: Noun;
    public item: Item;

    constructor (command: Command, noun?: Noun, item?: Item) {
        this.command = command;
        this.noun = noun;
        this.item = item;
    }
}