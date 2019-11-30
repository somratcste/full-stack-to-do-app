import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'nazmul'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
        }
      );
  }

}
