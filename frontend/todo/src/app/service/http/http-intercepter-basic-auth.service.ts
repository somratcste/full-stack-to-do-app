import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const username = 'nazmul';
    const password = 'password';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    return next.handle(request);
  }
}
