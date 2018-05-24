import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent }  from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCode } from './pipe/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './services/user.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthInterceptor }  from './services/auth-interceptor';
import { LoggerInterceptor }  from './services/logger-Interceptor';
import { LoginGuardService } from './services/login-guard.service';
import { APP_ROUTES } from './app.routing';
import { EmployeeComponent } from './employee/employee.component';
import { PersonalComponent } from './employee/personal/personal.component';
import { ProfessionalComponent } from './employee/professional/professional.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    NationalCode,
    FilterPipe,
    SigninComponent,
    SignupComponent,
    ObservableDemoComponent,
    EmployeeComponent,
    PersonalComponent,
    ProfessionalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [ UserService, LoginGuardService, {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  },
  {
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
