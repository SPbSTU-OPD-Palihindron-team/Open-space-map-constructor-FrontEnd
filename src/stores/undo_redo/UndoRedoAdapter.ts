import {Action} from "./Action";

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
    }
    undo(): void {
        if(this.index < 0){
            return
        }
        this.history[this.index].undo();
        this.index--;
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
    }
}