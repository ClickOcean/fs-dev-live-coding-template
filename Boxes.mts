import {Apple, Banana, Fruit, Kiwi, Orange} from "./Fruits.mts";

export abstract class Box {
    public abstract readonly type: string;
    protected abstract readonly limit: number;

    next(): Fruit {
        // todo: return random fruit
        return new Apple(this);
    };
}

export class MetalBox extends Box {
    public readonly type = 'metal';
    protected readonly limit = 30;
}

export class WoodenBox extends Box {
    public readonly type = 'wood';
    protected readonly limit = 50;
}

export class PlasticBox extends Box {
    public readonly type = 'plastic';
    protected readonly limit = 100;
}

export class CardboardBox extends Box {
    public readonly type = 'cardboard';
    protected readonly limit = 200;
}
