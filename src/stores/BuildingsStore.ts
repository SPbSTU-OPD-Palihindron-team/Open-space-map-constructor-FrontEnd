import {makeAutoObservable} from 'mobx'
import {Building} from "../openapi";

class BuildingsStore {
    constructor() {
        makeAutoObservable(this);
    }

    buildingKey = 1;

    listOfBuildings: Building[] = [
        {building_id:1, address:'Polytech', numberFloors:0},
        {building_id:2, address:'NIK', numberFloors:0}
    ];


    addBuilding(value: string){
        this.listOfBuildings.push({building_id: this.buildingKey++, address:value, numberFloors:10});
    }


}

export default new BuildingsStore();


