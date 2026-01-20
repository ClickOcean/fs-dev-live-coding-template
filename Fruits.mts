import {Box} from "./Boxes.mjs";

export abstract class Fruit {
    public readonly boxOfOrigin: Box;
    public abstract readonly type: string;

    constructor(public readonly box: Box) {
        this.boxOfOrigin = box;
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
