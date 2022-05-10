import {Action} from "../Action";
import {Item} from "../../../openapi";

export class AddItem implements Action{
    item: Item;
    constructor(item : Item) {
        this.item = item;
    }
    redo(): void {
    }

    undo(): void {
    }

}