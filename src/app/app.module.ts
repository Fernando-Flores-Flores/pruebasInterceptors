import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
     multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
