import {Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(public userService : UserService){}
    intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
        const clonedReq = req.clone({params : new HttpParams().set("auth",this.userService.getToken())});
        console.log("intercepted!!",clonedReq);
        return next.handle(clonedReq);
    }
}