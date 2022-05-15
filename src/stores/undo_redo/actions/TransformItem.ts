import {Action} from "../Action";
import {ItemType} from "../../../openapi";
import CanvasStore from "../../CanvasStore";

export class TransformItem  implements Action{
    private readonly item: ItemType;
    private readonly coords: {x:number, y: number};
    private readonly coords_next: {x:number, y: number};
    private scale: number;
    private scale_next: number;
    private angle: number;
    private angle_next: number;
    constructor(item : ItemType, coords_next: {x:number, y: number}, scale_next: number, angle_next: number) {
        this.item = item;
        this.coords = {x: item.polygon.point.x, y: item.polygon.point.y}
        this.coords_next = {x: coords_next.x, y: coords_next.y}
        this.scale = item.scale;
        this.scale_next = scale_next;
        this.angle = item.angle;
        this.angle_next = angle_next;
    }
    redo(): void {
        CanvasStore.transformItem(this.item,this.coords_next, this.scale_next, this.angle_next, true);
    }

    undo(): void {
        CanvasStore.transformItem(this.item,this.coords, this.scale, this.angle, true);
    }

}