import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User()

  divisions : any = []
  division: any = ''
  districts: any = [];
 upazillas: string = '';

  constructor(private rout: Router, private http: HttpClient) { 
 
    this.getDivisions()
  }

  ngOnInit(): void {
    
  }


  signUp() {


    this.user.loggedIn = true;
    localStorage.setItem('user', JSON.stringify(this.user))

    setTimeout(() => {
      this.rout.navigate(['home'])
    }, 3000);

  }


  loginPage() {
    this.rout.navigate(['login'])
  }
  getDivisions(){

    this.http.get<any>("https://bdapis.herokuapp.com/api/v1.1/divisions")
    .subscribe((res=>{
      this.divisions = res.data
   
      
    }))
  }
  getDistricts(){
 

    this.http.get<any>("https://bdapis.herokuapp.com/api/v1.1/division/"+this.division)
    .subscribe((res=>{
      this.districts = res.data
      console.log(this.districts);
    
    }))
  }


  getUpazilla(){
      
     return this.upazillas.split(',')    
    
  }
}
