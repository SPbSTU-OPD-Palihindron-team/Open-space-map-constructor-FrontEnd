import {makeAutoObservable} from "mobx";
type Point = {
    x: number,
    y: number
}
type Image = {
    src: string,
    x: number,
    y: number,
    key?: number
}

class CanvasStore{
    private absolutePosition : Point = {x: 0, y: 0};
    private scale: number = 1.0;
    private itemsArray: Image[] = [];
    private key = 1;
    chosenImage : string | null = null;
    constructor() {
        makeAutoObservable(this)
    }
    addItem(item: Image){
        item.key = ++this.key
        this.itemsArray.push(item)
    }
    get images(){
        return this.itemsArray
    }
    set canvasScale(scale: number){
        this.scale = scale
    }
    get canvasScale(){
        return this.scale
    }
    set canvasPosition(point: Point){
        this.absolutePosition = point
    }
    get canvasPosition(){
        return this.absolutePosition
    }
}
export default new CanvasStore()