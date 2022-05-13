import {Action} from "./Action";
import CanvasStore from "../CanvasStore";

export class UndoRedoAdapter {
    private history: Action[] = [];
    private index: number = -1;
    private maxHistoryLength : number = 30;
    redo(): void {
        if(this.index + 1 === this.history.length){
            return;
        }
        this.index++;
        this.history[this.index].redo();
        CanvasStore.setUndoRedoBlocked();
    }
    undo(): void {
        if(this.index < 0){
            return;
        }
        this.history[this.index].undo();
        this.index--;
        CanvasStore.setUndoRedoBlocked();
    }
    addAction(action : Action) : void {
        if(this.index + 1 != this.history.length){
            this.history.splice(this.index + 1);
        }
        this.history.push(action);
        // remove the first element of history
        if (this.history.length > this.maxHistoryLength){
            this.history.shift();
        }
        this.index = this.history.length - 1;
        CanvasStore.setUndoRedoBlocked();
    }
    getUndoRedoStatus() : {undoBlocked: boolean, redoBlocked: boolean} {
        let undoBlocked: boolean = false;
        let redoBlocked: boolean = false;
        if(this.index === -1){
            undoBlocked = true;
        }
        if(this.index === this.history.length-1){
            redoBlocked = true;
        }
        return {undoBlocked: undoBlocked, redoBlocked: redoBlocked};
    }
}