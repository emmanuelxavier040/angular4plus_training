import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoginGuardService } from './services/login-guard.service';


export const APP_ROUTES : Routes = [{
    path : "",
    redirectTo : 'pipe',
    pathMatch : 'full'
},{
    path : "pipe",
    component : PipeDemoComponent
},{
    path : 'signup',
    component : SignupComponent
},{
    path : 'login',
    component : SigninComponent
},{
    path : 'obsdemo',
    component : ObservableDemoComponent,
    canActivate : [LoginGuardService]
},{
    path : "**",
    redirectTo : "pipe",
    pathMatch : 'full'
}]