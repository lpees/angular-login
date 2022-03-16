import { Component } from '@angular/core';
import { ForgotPsswdService } from './forgot-psswd.service';


@Component({
  selector: 'app-forgot-psswd',
  templateUrl: './forgot-psswd.component.html',
  styleUrls: ['./forgot-psswd.component.css']
})
export class ForgotPsswdComponent {

  forgotPsswd: ForgotPsswdService;

  constructor( forgotPsswd: ForgotPsswdService ) { 
    this.forgotPsswd = forgotPsswd;
  }

}
