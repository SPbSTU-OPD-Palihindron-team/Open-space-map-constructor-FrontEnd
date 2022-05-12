import {Action} from "../Action";
import Konva from "konva";

export class SendItemBackFront implements Action {
    private itemRef: Konva.Shape | Konva.Stage;
    private prevZIndex: number;
    private nextZIndex: number;
    constructor(itemRef: Konva.Shape | Konva.Stage, prevZIndex: number, nextZIndex: number) {
        this.itemRef = itemRef;
        this.prevZIndex = prevZIndex;
        this.nextZIndex = nextZIndex;
    }

    redo(): void {
        this.itemRef.zIndex(this.nextZIndex);
    }

    undo(): void {
        this.itemRef.zIndex(this.prevZIndex);
    }

}