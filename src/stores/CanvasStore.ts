import {makeAutoObservable} from "mobx";
type Point = {
    x: number,
    y: number
}
class CanvasStore{
    private absolutePosition : Point = {x: 0, y: 0};
    private scale: number = 1.0;
    constructor() {
        makeAutoObservable(this)
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