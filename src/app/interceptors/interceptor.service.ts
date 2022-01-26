import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

  URLPost: string = 'http://apides.gestora.bo:9090/persona/login/token';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor corriendo');

    const headers = new HttpHeaders({
      usuario: 'microservice-gestora-app',
      contrasena: '45a61c02-56d4-41f9-b14e-a2cff5da10b0',
      scope: 'api.informacion',
      realms: 'AppMovil',
    });




    return next.handle(req);
  }
  public getTokken() {
    const body = {
      usuario: 'microservice-gestora-app',
      contrasena: '45a61c02-56d4-41f9-b14e-a2cff5da10b0',
      scope: 'api.informacion',
      realms: 'AppMovil',
    };
    let direccion = this.URLPost;
    return this.http.post<any>(direccion, body);
  }
  constructor(private router: Router,private http: HttpClient) {}



































  /*   intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token') || '';
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  } */
  /*   intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /*  headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + tk); */
  /*    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    const tokken = JSON.parse(localStorage.getItem('tok') || '{}');
    console.log('Tokken con Auth inicio');
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(tokken);
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log('Tokken con Auth Fin');
    if (tokken) {
      req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + tokken),
      });
    }
    return next.handle(req);
  } */
}
