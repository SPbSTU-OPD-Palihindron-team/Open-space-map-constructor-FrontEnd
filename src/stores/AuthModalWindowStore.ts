import {makeAutoObservable} from "mobx";
import {RegisteredUser} from "../openapi";


class AuthModalWindowStore {
    constructor() {
        makeAutoObservable(this);
    }

    active = false;
    private listOfRegistered: RegisteredUser[] = [];
    private id =  0;
    private email = "";
    private password = "";

    get getListOfUsers(){
        return this.listOfRegistered;
    }

    setEmail(email: string){
        this.email = email;
    }

    setPassword(password: string){
        this.email = password;
    }

    get getEmail(){
        return this.email;
    }

    addUser(){
        this.id += 1;
        this.listOfRegistered.push(this.userInfo);
    }

    private userInfo: RegisteredUser = {
        user_id: this.id,
        login: this.email,
        password: this.password,
    }

    handleActive() {
        this.active = !this.active;
    }

}

export default new AuthModalWindowStore();