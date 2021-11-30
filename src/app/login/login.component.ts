import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User()
  dbUser = new User()
  loginFailed = false;
  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user.username);

    let a = localStorage.getItem('user')!
    this.dbUser = JSON.parse(a)
    if (this.dbUser.password == this.user.password) {
      this.rout.navigate(['home'])
      this.user.loggedIn = true
      this.loginFailed = false
    } else {
      this.loginFailed = true;
    }

  }

  regPage() {
    this.rout.navigate(['registration'])
  }

}
