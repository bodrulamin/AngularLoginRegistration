import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new User()
  constructor(private rout: Router) { }

  ngOnInit(): void {
let a = localStorage.getItem('user')!
    this.user = JSON.parse(a)

  }

  logout() {
 

    this.user.loggedIn = false;
    localStorage.setItem('user', JSON.stringify(this.user))
    this.rout.navigate([''])
  }
}
