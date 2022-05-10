export interface Action {
    redo(): void;
    undo(): void;
}