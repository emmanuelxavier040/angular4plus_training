import { Injectable } from "@angular/core";
import { CanActivate} from '@angular/router';
import { UserService } from "./user.service";

@Injectable()
export class LoginGuardService implements CanActivate{

    constructor(public userService : UserService){}

    canActivate(){
        return this.userService.isAuthenticated();
    }
}