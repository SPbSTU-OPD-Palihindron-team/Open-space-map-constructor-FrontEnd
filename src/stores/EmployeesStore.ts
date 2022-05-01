import {makeAutoObservable} from 'mobx'


class EmployeesStore {
    constructor() {
        makeAutoObservable(this);
    }

     listOfEmployee = [
        { title: 'Nikishin Andrey', room: '418', building:'1', number:'893745564', url:"'./Andrey.jpg'" },
        { title: 'Sudakov Evgeniy', room: '417', building:'2', number:'893745554', url:"'./Andrey.jpg'" },
        { title: 'Alexeev Arseniy', room: '416', building:'3', number:'893745544', url:"'./Andrey.jpg'" }
    ];

    inform = {number: "", title: "", room: "", building: "", url: ""}

    updateInfo(value: any){
        this.inform = value;
    }

}

export default new EmployeesStore();


