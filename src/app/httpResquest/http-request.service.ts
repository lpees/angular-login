import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';



@Injectable()
export class HttpRequestService {

  http: Http;
  
  constructor(http: Http) { 
    this.http = http;
   }

  doPost(url: string, content: any, header: Headers) : Observable<any>{
    return this.http.post(
      url, JSON.stringify(content), {headers: header}
    )
  }
  
  doGet(url: string, header: Headers){
    return this.http.get(
      url, {headers: header}
    ).map( response => response.json());
  }



 

}
