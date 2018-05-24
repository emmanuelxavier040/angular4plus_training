import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USER_DATA } from '../data/mocks'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    counter : number = 0;
    constructor(private http: Http){}
    getUserData(){
        return this.http.get("assets/data/user-data.json")
            .map((response)=><User[]>response.json().userdata)
    }

    increase(){ 
        this.counter ++;
    }
}