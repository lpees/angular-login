import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { User } from '../../model/user';
import { HttpRequestService } from '../../httpResquest/http-request.service';

@Injectable()
export class ForgotPsswdService {
  
  user: User = new User();;
  url: string = "http://localhost:8081/lab510-backend/";
  
  http: HttpRequestService;
  header = new Headers();
 

  constructor( http: HttpRequestService) {
    this.http = http;
   }

  sendNewPsswd($event){
    event.preventDefault();
    console.log(this.user);
    this.header.append("Content-Type", "application/json");

    this.http.doPost(
      `${this.url}v1/?`, 
      this.user, 
      this.header
    ).subscribe (response => {
      console.log(response);
    })

  }
}
