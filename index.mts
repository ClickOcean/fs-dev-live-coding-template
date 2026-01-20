import {Box, CardboardBox, MetalBox, PlasticBox, WoodenBox} from "./Boxes.mts";
import {Bag, BlueBag, GreenBag, OrangeBag, RedBag, YellowBag} from "./Bags.mts";

async function main(round: number) {
    const boxes: Box[] = [new MetalBox(), new WoodenBox(), new PlasticBox(), new CardboardBox()];
    const bags: Bag[] = [new RedBag(), new BlueBag(), new GreenBag(), new YellowBag(), new OrangeBag()];

    let i = 0;
    while(true) {
        const fruit = boxes[i++ % boxes.length].next();

        try {
            bags[0].put(fruit)
        } catch(e) {
            try {
                bags[1].put(fruit)
            } catch(e) {
                try {
                    bags[2].put(fruit)
                } catch(e) {
                    // todo-1: try to put it into the 4th and 5th bag
                    // todo-2: this code looks ugly, refactor it
                }
            }
        }

        break;
    }

    console.log('Done! Report: ...');
}

await main(5 * 60 * 1000);
