import {Command} from './Command';
import {Noun} from './Noun';

export class Action {
    private command: Command;
    private noun: Noun;

    constructor (command: Command, noun: Noun) {
        this.command = command;
        this.noun = noun;
    }
}