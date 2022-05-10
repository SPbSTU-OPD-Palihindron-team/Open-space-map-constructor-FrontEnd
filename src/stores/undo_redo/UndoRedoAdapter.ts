import {Action} from "./Action";

export class UndoRedoAdapter {
    private history: Action[] = [];
    private index: number = -1;
    private maxHistoryLength : number = 20;
    redo(): void {
        if(this.index + 1 === this.history.length){
            return;
        }
        this.history[this.index].redo();
        this.index++;
    }
    undo(): void {
        if(this.index < 0){
            return
        }
        this.history[this.index].undo();
        this.index--;
    }
    addAction(action : Action) : void {
        let historyLen = this.history.length;
        if(this.index + 1 != historyLen){
            this.history.splice(this.index + 1);
        }
        this.history.push(action);
        historyLen++;
        // remove the first element of history
        if (historyLen > this.maxHistoryLength){
            this.history.shift();
            historyLen--;
        }
        this.index = historyLen - 1;
    }
}