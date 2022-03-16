import { Injectable } from '@angular/core';
import { CookieService, CookieOptions, CookieOptionsArgs } from 'angular2-cookie/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { HttpRequestService } from '../httpResquest/http-request.service';
import { Authentication } from '../model/authentication';

@Injectable()
export class ManagerCookieService {
  
  login: Authentication = new Authentication();

  url: string = "http://localhost:8081/lab510-backend/";
  cookie: CookieService;
  http: HttpRequestService;
  expires: CookieOptions;
  header = new Headers();

  constructor(cookie: CookieService, http: HttpRequestService) { 
    this.cookie = cookie;
    this.http = http;
  }

  setCookie(key: string, value: string){
    this.cookie.put(key, value);
  }

  getCookie(key: string){
    return this.cookie.get(key);
  }

  deleteCookie(key: string){
    this.cookie.remove(key);
  }

  
}
