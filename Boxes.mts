import {Apple, Banana, Fruit, Kiwi, Orange} from "./Fruits.mts";

abstract class Box {
    public abstract readonly type: string;
    protected abstract readonly limit: number;

    abstract next(): Promise<Fruit>;
}

export class MetalBox extends Box {
    public readonly type = 'metal';
    protected readonly limit = 30;

    async next() {
        // todo: generate random fruit
        return new Apple();
    }
}

export class WoodenBox extends Box {
    public readonly type = 'wood';
    protected readonly limit = 50;

    async next() {
        return new Orange();
    }
}

export class PlasticBox extends Box {
    public readonly type = 'plastic';
    protected readonly limit = 100;

    async next() {
        return new Banana();
    }
}

export class CardboardBox extends Box {
    public readonly type = 'cardboard';
    protected readonly limit = 200;

    async next() {
        return new Kiwi();
    }
}
