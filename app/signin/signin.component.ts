import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  login(form : NgForm){
    // alert("submitted");
    console.log(form.value.username);
  }

  ngOnInit() {
  }

}
