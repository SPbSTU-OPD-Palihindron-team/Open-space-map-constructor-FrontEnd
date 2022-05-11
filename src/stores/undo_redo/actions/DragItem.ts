import {Action} from "../Action";
import {Item, ItemType} from "../../../openapi";
import CanvasStore from "../../CanvasStore";
import {observer} from "mobx-react-lite";
export class DragItem implements Action {
    private readonly item: ItemType;
    private readonly coords: {x:number, y: number};
    private readonly coords_next: {x:number, y: number};
    constructor(item : ItemType, coords_next: {x:number, y: number}) {
        this.item = item;
        this.coords = {x: item.polygon.point.x, y: item.polygon.point.y}
        this.coords_next = {x: coords_next.x, y: coords_next.y}
    }
    redo(): void {
        CanvasStore.dragItem(this.item,this.coords_next, true);
    }

    undo(): void {
        CanvasStore.dragItem(this.item,this.coords, true);
    }

}