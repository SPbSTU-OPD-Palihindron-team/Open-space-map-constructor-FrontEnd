import {Action} from "../Action";
import {Item, ItemType} from "../../../openapi";
import CanvasStore from "../../CanvasStore";

export class DeleteItem implements Action{
    item: ItemType;
    constructor(item : ItemType) {
        this.item = item;
    }
    redo(): void {
        CanvasStore.deleteItem(this.item, true);
    }

    undo(): void {
        CanvasStore.readdItem(this.item);
    }

}