import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { NewPsswdComponent } from './forms/new-psswd/new-psswd.component';
import { ForgotPsswdComponent } from './forms/forgot-psswd/forgot-psswd.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './guards/auth-guard';


const APP_ROUTES: Routes = [
    { path: '', component: IndexComponent, canActivate: [ AuthGuard ] },
    { path: 'home', component: IndexComponent, canActivate: [ AuthGuard ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'update-psswd/:document', component: NewPsswdComponent, canActivate: [ AuthGuard ]},
    { path: 'forgot-psswd', component: ForgotPsswdComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

