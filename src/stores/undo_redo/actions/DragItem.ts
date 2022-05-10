import {Action} from "../Action";
import {Item} from "../../../openapi";
import CanvasStore from "../../CanvasStore";
export class DragItem implements Action {
    item: Item;
    constructor(item : Item) {
        this.item = item;
    }
    redo(): void {
        CanvasStore.dragItem(this.item.point.x, this.item.point.x, this.item.item_id);
    }

    undo(): void {
        CanvasStore.dragItem(this.item.point.x, this.item.point.x, this.item.item_id);
    }

}