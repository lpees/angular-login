import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPsswdComponent } from './forgot-psswd/forgot-psswd.component';
import { NewPsswdComponent } from './new-psswd/new-psswd.component';

import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { ForgotPsswdService } from './forgot-psswd/forgot-psswd.service';
import { NewPsswdService } from './new-psswd/new-psswd.service';
import { routing } from '../app-routing';
import { AlertMessageComponent } from '../alert/alert-message/alert-message.component';
import { AlertMessageService } from '../alert/alert-message.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  
  declarations: [ LoginComponent,
     RegisterComponent,
     ForgotPsswdComponent,
     NewPsswdComponent,
     AlertMessageComponent
  ],
  
  exports: [ LoginComponent,
     RegisterComponent,
     ForgotPsswdComponent,
     NewPsswdComponent,
     AlertMessageComponent
     
  ],

  providers: [
    LoginService,
    RegisterService,
    NewPsswdService,
    ForgotPsswdService,
    AlertMessageService
  ]
})
export class FormModule { }
