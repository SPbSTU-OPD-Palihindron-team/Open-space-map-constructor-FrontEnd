import {makeAutoObservable} from "mobx";
import {ItemType} from "../types/ItemType";
import {PointType} from "../types/PointType";


class CanvasStore{
    private absolutePosition : PointType = {x: 0, y: 0};
    private scale: number = 1.0;
    private itemsArray: ItemType[] = [];
    /*TODO: maybe make global keys for props to ensure their uniqueness*/
    private key = 1;
    chosenImage : string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    addItem(coordinates: PointType){
        if(this.chosenImage == null){
            return;
        }
        const item : ItemType ={
            src: this.chosenImage,
            _key: ++this.key,
            x: coordinates.x,
            y: coordinates.y,
        }
        this.itemsArray.push(item);
    }

    dragItem(key: number, x: number, y: number): void{
        const index = this.itemsArray.findIndex(item => item._key === key)
        if(index == undefined){
            return;
        }
        this.itemsArray[index].x = x;
        this.itemsArray[index].y = y;
    }

    get images(){
        return this.itemsArray;
    }
    set canvasScale(scale: number){
        this.scale = scale;
    }
    get canvasScale(){
        return this.scale;
    }
    set canvasPosition(point: PointType){
        this.absolutePosition = point;
    }
    get canvasPosition(){
        return this.absolutePosition;
    }
}
export default new CanvasStore();