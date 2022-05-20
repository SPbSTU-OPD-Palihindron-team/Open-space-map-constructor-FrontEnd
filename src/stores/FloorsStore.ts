import {makeAutoObservable} from 'mobx'
import {Floor} from "../openapi";

class FloorsStore {
    constructor() {
        makeAutoObservable(this);
    }

    floorKey = 1;
    buildingKey = 1;

    listOfFloors: Floor[] = [
        {floor_id:1, building_id:1, numberFloor:1}
    ];


    addFloor(value: number, buildingId: number){
        const currentFloor = this.listOfFloors.find(floor => floor.building_id === buildingId)
        if(currentFloor === undefined)
            return
        this.listOfFloors.push({floor_id:this.floorKey++,building_id: currentFloor.building_id, numberFloor:value});
    }


}

export default new FloorsStore();


