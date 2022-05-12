import {makeAutoObservable} from "mobx";
import {ItemType, Wall} from "../openapi";
import {PointType} from "../types/PointType";
import {UndoRedoAdapter} from "./undo_redo/UndoRedoAdapter";
import {DragItem} from "./undo_redo/actions/DragItem";
import {DeleteItem} from "./undo_redo/actions/DeleteItem";
import {AddItem} from "./undo_redo/actions/AddItem";
import {icons} from "../assets/images/icons/icons";


class CanvasStore{
    private undoRedoAdapter = new UndoRedoAdapter();
    private absolutePosition : PointType = {x: 0, y: 0};
    private scale: number = 1.0;
    private itemsArray: ItemType[] = [];

    public contextMenu: HTMLElement | null = null;

    private wallsArray: Wall[] = [];
    public isWallToolActive = false;

    public clickCounter = 0;

    /*TODO: maybe make global keys for props to ensure their uniqueness*/
    private key = 1;
    private wallIndex = 0;
    private floorIndex = 0;
    //Chosen image when drag&drop
    chosenImage : string | null = null;
    //Chosen item on context menu. Do it private?
    chosenItem : ItemType | null = null;
    constructor() {
        makeAutoObservable(this);
    }

    undo(): void{
        this.undoRedoAdapter.undo()
    }

    redo(): void{
        this.undoRedoAdapter.redo()
    }

    addItem(coordinates: PointType){
        if(this.chosenImage == null){
            return;
        }
        console.log("chosen image",this.chosenImage);
        const item : ItemType ={
            itemName: "",
            valuablePlacement: "",
            pictureLink: icons[this.chosenImage],
            itemType_id: ++this.key,
            polygon : {
                point:{
                    x: coordinates.x,
                    y: coordinates.y,
                }
            }

        }
        this.undoRedoAdapter.addAction(new AddItem(item));
        this.itemsArray.push(item);
    }

    readdItem(item: ItemType){
        this.itemsArray.push(item);
    }

    dragItem(item: ItemType, newPoint : {x: number, y: number}, undoRedoSkip: boolean = false): void{
        const index = this.itemsArray.findIndex(i => i.itemType_id === item.itemType_id)
        if(index == undefined){
            return;
        }
        if(!undoRedoSkip){
            this.undoRedoAdapter.addAction(new DragItem(item, {x: newPoint.x, y: newPoint.y}))
        }
        this.itemsArray[index].polygon.point.x = newPoint.x;
        this.itemsArray[index].polygon.point.y = newPoint.y;
        if(undoRedoSkip){
            this.itemsArray = this.itemsArray.slice()
        }
    }

    deleteItem(item: ItemType, undoRedoSkip: boolean = false){
        const index = this.itemsArray.findIndex(i => i.itemType_id === item.itemType_id)
        if(index == undefined){
            return;
        }
        if(!undoRedoSkip){
            this.undoRedoAdapter.addAction(new DeleteItem(item))
        }
        this.itemsArray.splice(index,1);
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