import {Box} from "./Boxes.mts";

export abstract class Fruit {
    public readonly box: Box;
    public abstract readonly type: string;

    constructor(box: Box) {
        this.box = box
    }
}

export class Apple extends Fruit {
    public readonly type = 'apple';
}

export class Banana extends Fruit {
    public readonly type = 'banana';
}

export class Orange extends Fruit {
    public readonly type = 'orange';
}

export class Kiwi extends Fruit {
    public readonly type = 'mango';
}

export class Pear extends Fruit {
    public readonly type = 'pear';
}
