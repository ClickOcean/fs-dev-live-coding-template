import {Fruit} from "./Fruits.mts";

abstract class Bag {
    public abstract readonly color: string;

    put(fruit: Fruit): void {
        // todo
    };
}

export class RedBag extends Bag {
    public readonly color = 'red';
}

export class BlueBag extends Bag {
    public readonly color = 'blue';
}

export class GreenBag extends Bag {
    public readonly color = 'green';
}

export class YellowBag extends Bag {
    public readonly color = 'yellow';
}

export class OrangeBag extends Bag {
    public readonly color = 'orange';
}
