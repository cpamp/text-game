import {Action} from './Action';

export class Phase {
    public children: Phase[];
    public description: string;
    public actions: Action[];
    public preview: string;

    constructor(children: Phase[], description: string, actions: Action[], preview: string) {
        this.children = children;
        this.description = description;
        this.actions = actions;
        this.preview = preview;
    }
}