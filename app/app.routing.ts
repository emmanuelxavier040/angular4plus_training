import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoginGuardService } from './services/login-guard.service';
import { ProductComponent }  from './product/product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfessionalComponent } from './employee/professional/professional.component';
import { PersonalComponent } from './employee/personal/personal.component';

export const APP_ROUTES : Routes = [{
    path : "",
    redirectTo : 'pipe',
    pathMatch : 'full'
},{
    path : "pipe",
    component : PipeDemoComponent
},{
    path : 'product',
    loadChildren : "app/product/product.module#ProductModule"  
},{
    path : 'employee',
    component : EmployeeComponent,
    children : [{
        path : 'personal/:id',
        component : PersonalComponent
    },{
        path : 'professional',
        component : ProfessionalComponent
    }]

},{ path : 'signup',
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