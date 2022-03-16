import { Component, OnInit } from '@angular/core';
import { NewPsswdService } from './new-psswd.service';

@Component({
  selector: 'app-new-psswd',
  templateUrl: './new-psswd.component.html',
  styleUrls: ['./new-psswd.component.css']
})
export class NewPsswdComponent{

  resetPsswd: NewPsswdService;
  
  constructor( resetPsswd: NewPsswdService ) { 
    this.resetPsswd = resetPsswd;
   }

}
