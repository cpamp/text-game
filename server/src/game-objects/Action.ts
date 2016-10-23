import {Command} from './Command';
import {Noun} from './Noun';
import {Item} from './Item';
import {Position} from './Position';
import {Phase} from './Phase';

export class Action {
    public commands: Command;
    public noun: Noun;
    public phase: Phase;

    constructor (commands: Command, noun: Noun | Item, phase?: Phase) {
        this.commands = commands;
        this.noun = noun;
        this.phase = phase;
    }
}

export class ActionResult {
    public position: Position;
}

export interface IAction {
    perform: () => ActionResult;
}