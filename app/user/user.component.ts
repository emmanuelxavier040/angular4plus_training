import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterContentInit, AfterContentChecked, SimpleChange, ViewEncapsulation } from '@angular/core';
import { AfterViewInit, AfterViewChecked, DoCheck, OnDestroy } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { User } from '../model/user';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

    @Input('aliasFortitle') title: string;
    @Input('users') users: User[];
    @Output('childEvent') childEvent = new EventEmitter<string>();

    myNum: number = 2;

    myClasses = {
        'dob': true,
        'feature': false
    }
    bgColor = {
        backgroundColor: 'yellow'
    }


    moreInfo(user: User) {
        alert(`${user.firstName} is working with ${user.company}!!!`);
    }

    onKeyUp(value: string) {
        this.childEvent.emit(value);
        console.log(value);
    }

    constructor() { }
    ngOnInit() { }
    ngOnChanges(changes: SimpleChanges) { }
    ngDoCheck() { }
    ngAfterViewInit() { }
    ngAfterContentInit() { }
    ngAfterContentChecked() { }
    ngViewInit() { }
    ngAfterViewChecked() { }
    ngOnDestroy() { }


}