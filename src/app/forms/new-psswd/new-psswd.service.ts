import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { HttpRequestService } from '../../httpResquest/http-request.service';
import { Authentication } from '../../model/authentication';
import { ManagerCookieService } from '../../cookie/manager-cookie.service';
import { ActivatedRoute } from '@angular/router';
import { RedirectService } from '../../redirectionService/redirect.service';
import { AlertMessageService } from '../../alert/alert-message.service';

@Injectable()
export class NewPsswdService {

  url: string = "http://localhost:8081/lab510-backend/";
  
  login: Authentication = new Authentication();
  redirect: RedirectService;
  
  http: HttpRequestService;
  cookie: ManagerCookieService;
  header = new Headers(); 

  constructor( private route: ActivatedRoute, http: HttpRequestService, cookie: ManagerCookieService, redirect: RedirectService, private alert: AlertMessageService) {
    this.http = http;
    this.cookie = cookie;
    this.login.document = this.route.snapshot.children[0].params['document'];  
    this.redirect = redirect;  
   }

  updatePsswd($event){
    event.preventDefault();
    console.log(this.login)
    this.header.append("Content-Type", "application/json");
    this.header.append("Authentication", this.cookie.getCookie("Authentication"));

    this.http.doPost(
      `${this.url}v1/authentication/token`, 
      this.login,
      this.header
    ).subscribe (response => {
      if(response.json().responseCode == 0){
        this.http.doPost(
          `${this.url}v1/password`, 
          this.login,
          this.header
        ).subscribe (response => {
          if(response.json().responseCode == 0){
            this.redirect.forRoutes('home');
          }else{
            console.log('senha incorreta!');
            this.alert.setText("Senha atual é invalida");
            this.alert.enableMessage();
          }
        })
      }else {
        //Voltar para o menu e apresenta mensagem de usuario não autenticado
      }
    })

   

  }

}
