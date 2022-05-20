import {makeAutoObservable} from 'mobx'
import {Employee} from "../openapi";

class EmployeesStore {
    constructor() {
        makeAutoObservable(this);
    }

    listOfEmployee: Employee[] = [
        {employee_id:1, name:'Andrey', surname:'Nikishin', email:'andjix_17@mail.ru', telephone:"89274566656", room:112, building:'Polytech' },
        {employee_id:1, name:'Arseniy', surname:'Alexeev', email:'alexeev.ap@mail.ru', telephone:"89274566656", room:214, building:'Polytech' },
        {employee_id:1, name:'Evgeniy', surname:'Sudakov', email:'andjix_17@mail.ru', telephone:"89274566656", room:217, building:'NIK' },
        {employee_id:1, name:'Andrey', surname:'Novikov', email:'andjix_17@mail.ru', telephone:"89274566656", room:303, building:'NIK' },
        {employee_id:1, name:'Kirill', surname:'Jeludev', email:'andjix_17@mail.ru', telephone:"89274566656", room:402, building:'NIK' },
        {employee_id:1, name:'Nikita', surname:'Dimitruk', email:'andjix_17@mail.ru', telephone:"89274566656", room:407, building:'Polytech' },
        {employee_id:1, name:'Vladimir', surname:'Sevastyanov', email:'andjix_17@mail.ru', telephone:"89274566656", room:415, building:'Polytech' }
    ];

    inform: Employee = {employee_id:0, name:'', surname:'', email:'', telephone:"", room:0, building:'' }


    updateInfo(value: any){
        this.inform = value;
    }

}

export default new EmployeesStore();


