import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {


  id : number;
  constructor(private route : ActivatedRoute) { 
    // this.id = route.snapshot.params["id"];
    this.route.params.subscribe((param)=>{
      this.id = +param['id'];
    });
  }

  ngOnInit() {
  }

}
