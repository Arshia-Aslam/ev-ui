import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

 
  ngOnInit() {
    
  }
  

  gotoTab1(){
    console.log("here")

    this.router.navigate(['/tabs/tab1']);
  }

  gotoforgotpassword(){
    console.log("here")
    this.router.navigate(['/forgotpassword']);
  }
  gototest(){
    console.log("here")
    this.router.navigate(['/test']);
  }



}

