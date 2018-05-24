import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import {UserService } from './services/user.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  parentValue: string;
  title = 'app';

  constructor(public userService : UserService) {}

  parentEvent(eventData: string) {
    this.parentValue = eventData;
  }

  users : User[];
  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyDH0T0JiGWVH3jD-lNbQ9kAy1zQnKPfuW4",
      authDomain: "sg-app-55a60.firebaseapp.com",
    });

    this.userService.getUserData().subscribe((users)=>this.users = users);
  }



}
