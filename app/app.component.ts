import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import {UserService } from './services/user.service';

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
    this.userService.getUserData().subscribe((users)=>this.users = users);
  }

}
