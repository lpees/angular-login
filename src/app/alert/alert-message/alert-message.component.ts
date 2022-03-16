import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from '../alert-message.service';



@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  text: string;
  isActivate: boolean;
  
  constructor(private alert: AlertMessageService) {
    
   }

  ngOnInit() {
    this.alert.isActivate.subscribe(
      isActivate => this.isActivate = isActivate
    )

    this.alert.text.subscribe(
      text => this.text = text
    )

  }

}
