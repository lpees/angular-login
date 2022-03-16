import { Injectable } from '@angular/core';
import { HttpRequestService } from '../httpResquest/http-request.service';
import { Router } from '@angular/router';
import { ManagerCookieService } from '../cookie/manager-cookie.service';

@Injectable()
export class RedirectService {

  cookie: ManagerCookieService;

  router: Router;
  url: string = "http://localhost:8081/lab510-backend/";
  http: HttpRequestService;

  constructor(http: HttpRequestService, router: Router, cookie: ManagerCookieService) {
    this.http = http;
    this.router = router;
    this.cookie = cookie;
   }

   forRoutes(router: string){
    this.router.navigateByUrl(router);
   }

   forRoutesWithParams(router: string, document: string){
    this.router.navigateByUrl(`${router}/${document}`);
   }

}
