import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public userService : UserService) { }

  login(form : NgForm){
    this.userService.login(form.value.username, form.value.password);
    console.log(form.value.username);
    
  }

  getData(){    
    this.userService.getApiData();
  }

  postData(){    
    this.userService.postData();
  }

  ngOnInit() {
  }

}
