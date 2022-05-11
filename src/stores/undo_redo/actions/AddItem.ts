import {Action} from "../Action";
import {Item, ItemType} from "../../../openapi";
import canvasStore from "../../CanvasStore";

export class AddItem implements Action{
    item: ItemType;
    constructor(item : ItemType) {
        this.item = item;
    }
    redo(): void {
        canvasStore.readdItem(this.item);
    }

    undo(): void {
        canvasStore.deleteItem(this.item, true);
    }

}