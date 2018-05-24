import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  num : number;  
  data : string;
  unsubInterval : any;

  unsub(){
    this.unsubInterval.unsubscribe();
    console.log("In Unsubscribe");
  }

  constructor() { 
    this.unsubInterval = Observable.interval(1000).subscribe((num)=>this.num = num); 
    console.log(this.num);

    Observable.create((observer)=>{
      setTimeout(()=>{
        observer.next(100)
      }, 1000)
      setTimeout(()=>{
        observer.next(150)
      }, 2000)
      setTimeout(()=>{
        observer.next(200)
      }, 3000)
      setTimeout(()=>{
        observer.complete()
      }, 4000)
      setTimeout(()=>{
        observer.next(500)
      }, 5000)
    }).subscribe(
      (data)=>this.data = data,
      (err)=>console.log("Error Occured", err),
      ()=>console.log("Completed!!"));

  }

  ngOnInit() {
  }

}
