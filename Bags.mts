import {Fruit} from "./Fruits.mts";

export abstract class Bag {
    public abstract readonly color: string;

    abstract put(fruit: Fruit): void;
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

    put(fruit: Fruit) {
        if(fruit.type === 'kiwi' && fruit.boxOfOrigin.type === 'plastic') {
            throw new Error('No kiwi from plastic box!')
        }
    }
}

export class OrangeBag extends Bag {
    public readonly color = 'orange';
}
