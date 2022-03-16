import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { AppComponent } from './app.component';
import { FormModule } from './forms/form.module';
import { routing } from './app-routing';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';

import { HttpRequestService } from './httpResquest/http-request.service';
import { ManagerCookieService } from './cookie/manager-cookie.service';
import { RedirectService } from './redirectionService/redirect.service';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormModule,
    routing
  ],
  providers: [
    HttpRequestService,
    CookieService, 
    ManagerCookieService,
    RedirectService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
