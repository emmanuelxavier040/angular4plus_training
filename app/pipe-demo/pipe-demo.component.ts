import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

filteredStatus : string;
todos = [{
  label: "Some Work",
  status: 'done'
},{
  label: "Some Work",
  status: 'pending'
},{
  label: "Some Work",
  status: 'done'
}]

someData = new Promise((resolve)=>{
  setTimeout(() => {
    resolve(100);
  }, 2000);
})

  constructor() { }

  ngOnInit() {
  }

}
