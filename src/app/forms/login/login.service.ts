import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Authentication } from '../../model/authentication';
import { HttpRequestService } from '../../httpResquest/http-request.service';
import { ManagerCookieService } from '../../cookie/manager-cookie.service';
import { RedirectService } from '../../redirectionService/redirect.service';
import { AlertMessageComponent } from '../../alert/alert-message/alert-message.component';
import { AlertMessageService } from '../../alert/alert-message.service';


@Injectable()
export class LoginService {

  userLogged: boolean;
  login: Authentication = new Authentication();
  

  url: string = "http://localhost:8081/lab510-backend/";
  redirect: RedirectService;
  
  http: HttpRequestService;
  cookie: ManagerCookieService;
  header = new Headers();

  constructor( http: HttpRequestService, cookie: ManagerCookieService, redirect: RedirectService, private alert: AlertMessageService) {
    this.http = http;
    this.cookie = cookie;
    this.redirect = redirect;
    
   }
   
  sendData($event){
    event.preventDefault();
    this.header.append("Content-Type", "application/json"); 

    this.http.doPost(
      `${this.url}v1/authentication`,
      this.login,
      this.header
    ).subscribe(response => {    
      if(response.json().responseCode == 0){
        this.userLogged = true;
        this.cookie.setCookie("Authentication", response.json().userLogged.token);
        this.redirect.forRoutesWithParams('update-psswd', this.login.document);
      }else if (response.json().responseCode == 1) {
        this.userLogged = false;
        this.alert.setText("Login ou senha estão incorretos");
        this.alert.enableMessage();
      }
    })
    

  }

  isAuthenticated(){
    return this.userLogged;
  }

}
