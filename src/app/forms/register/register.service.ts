import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { User } from '../../model/user';
import { HttpRequestService } from '../../httpResquest/http-request.service';
import { RedirectService } from '../../redirectionService/redirect.service';
import { AlertMessageService } from '../../alert/alert-message.service';



@Injectable()
export class RegisterService {

  user: User = new User();
  url: string = "http://localhost:8081/lab510-backend/";
  redirect: RedirectService;
  
  http: HttpRequestService;
  header = new Headers();

  constructor( http: HttpRequestService, redirect: RedirectService, private alert: AlertMessageService ) {
    this.http = http;
    this.redirect = redirect;
   }

  registerUser($event){
    event.preventDefault();
    console.log(this.user);
    this.header.append("Content-Type", "application/json");

    this.http.doPost(
      `${this.url}v1/user`, 
      this.user, 
      this.header
    ).subscribe (response => {
      if(response.status == 201){
        this.redirect.forRoutes('login');
      }else {
        this.alert.setText('Não foi possivel criar seu usuario. Tente novamente!');
        this.alert.enableMessage();
      }
    })

  }

}
