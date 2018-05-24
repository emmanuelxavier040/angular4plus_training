import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USER_DATA } from '../data/mocks'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    token : string;
    counter : number = 0;
    constructor(private http: Http, private httpClient : HttpClient, private router : Router){}
    getUserData(){
        return this.http.get("assets/data/user-data.json")
            .map((response)=><User[]>response.json().userdata)
    }

    getApiData(){
        console.log("Get Data from API");
        return this.httpClient.get<User[]>("https://sg-app-55a60.firebaseio.com/userdata.json")
        .subscribe((data)=>console.log(data)+"sdsd",
        err=>console.log(err),
        ()=>console.log("Completed"));
    }

    postData(){
        return this.httpClient.post("https://sg-app-55a60.firebaseio.com/userdata.json",{
            data : "Some Data"
        })
        .subscribe((data)=>console.log(data),
        err=>console.log(err),
        ()=>console.log("Completed"));
    }


    register(email, password){
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
        .then(response=>console.log(response))
        .catch(err=>console.log(err));
    }

    login(email,password){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response=>{
                firebase.auth().currentUser.getIdToken()
                    .then(token => {
                        console.log(token);
                        this.token = token})                    
                    .catch(err=>console.log(err));
                this.router.navigate(['pipe']);
                console.log(response)
            })
            .catch(err=>console.log(err));      
    }

    getToken(){
        return this.token;
    }

    isAuthenticated(){
        return this.token!=null;
    }

    signOut(){
        firebase.auth().signOut();
        this.token = null;
    }


    increase(){ 
        this.counter ++;
    }
}