import {CardboardBox, MetalBox, PlasticBox, WoodenBox} from "./Boxes.mts";
import {BlueBag, GreenBag, OrangeBag, RedBag, YellowBag} from "./Bags.mts";

async function main(round: number) {
    const boxes = [new MetalBox(), new WoodenBox(), new PlasticBox(), new CardboardBox()];
    const bags = [new RedBag(), new BlueBag(), new GreenBag(), new YellowBag(), new OrangeBag()];

    while(true) {
        const fruit = await boxes[0].next();

        bags[0].put(fruit);

        break;
    }

    console.log('Done!');
}

await main(5 * 60 * 1000);
