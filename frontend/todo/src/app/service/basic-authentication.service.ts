import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorld} from './data/welcome-data.service';
import {map} from 'rxjs/operators';

export const TOKEN = 'authenticateUser';
export const AUTHENTICATED_USER = 'token';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

    isUserLoggedIn() {
      const user = sessionStorage.getItem(AUTHENTICATED_USER);
      return !(user === null);
    }

    logout() {
      sessionStorage.removeItem(AUTHENTICATED_USER);
      sessionStorage.removeItem(TOKEN);
    }

    getAuthenticatedUser() {
      return sessionStorage.getItem(AUTHENTICATED_USER);
    }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth', {headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
