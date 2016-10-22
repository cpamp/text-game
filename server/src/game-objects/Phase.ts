import {Action} from './Action';

export class Phase {
    public children: Phase[];
    public description: string;
    public actions: Action[];

    constructor(children: Phase[], description: string, actions: Action[]) {
        this.children = children;
        this.description = description;
        this.actions = actions;
    }
}