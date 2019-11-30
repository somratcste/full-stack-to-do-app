import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorld {
  construct(message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeHelloWordService() {
    return this.http.get<HelloWorld>('http://localhost:8080/hello-world');
  }
}
