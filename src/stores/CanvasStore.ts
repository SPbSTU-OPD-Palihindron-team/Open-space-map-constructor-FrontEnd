import {makeAutoObservable} from "mobx";
import {ItemType} from "../types/ItemType";
import {PointType} from "../types/PointType";
import {Wall} from "../openapi/models/Wall";
import Konva from "konva";
import {VectorType} from "../types/VectorType";


class CanvasStore{
    private absolutePosition : PointType = {x: 0, y: 0};
    private scale: number = 1.0;
    private itemsArray: ItemType[] = [];

    private wallsArray: Wall[] = [];
    public isWallToolActive = false;

    public clickCounter = 0;

    /*TODO: maybe make global keys for props to ensure their uniqueness*/
    private key = 1;
    private wallIndex = 0;
    private floorIndex = 0;

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

    addWall(line: PointType[]){
        const wall : Wall = {
            wall_id: ++this.wallIndex,
            floor_id:  this.floorIndex,
            form: [{point:line[0]}, {point:line[1]}],
        }
        this.wallsArray.push(wall);
    }

    // dragWall(key: number, x: number, y: number): void{
    //     const index = this.wallsArray.findIndex(wall => wall.wall_id === key)
    //     if(index == undefined){
    //         return;
    //     }
    //     this.wallsArray[index]. = x;
    //     this.wallsArray[index].y = y;
    // }

    handleWallToolActive = () =>{
        this.isWallToolActive = !this.isWallToolActive;
    }

     wallArrOfCord = (wallIndex: number) => {
        let arrOfCoordinates: number[] = [];
        const wall = this.wallsArray[wallIndex];
        for(let i = 0; i< wall.form.length; i++){
            arrOfCoordinates.push(wall.form[i].point.x, wall.form[i].point.y);
        }
        return arrOfCoordinates;
    }


    get walls(){
        return this.wallsArray;
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