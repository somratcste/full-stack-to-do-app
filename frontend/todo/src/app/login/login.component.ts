import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'somrat'
  password = ''
  errorMessage = "invalid credential"
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === 'somrat' && this.password === 'somrat') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
