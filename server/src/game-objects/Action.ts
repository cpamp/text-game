import {Command} from './Command';
import {Noun} from './Noun';
import {Item} from './Item';

export class Action {
    public commands: Command;
    public noun: Noun;

    constructor (commands: Command, noun: Noun | Item) {
        this.commands = commands;
        this.noun = noun;
    }
}