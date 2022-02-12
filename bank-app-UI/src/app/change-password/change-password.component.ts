import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
  }


  constructor(public fb: FormBuilder, private router: Router) {
    
  }

  transactionClicked(){
    this.router.navigate(["transDetails"])
  }

  getInfo(){
    this.router.navigate(["getInfo"])
  }

  transfer(){
    this.router.navigate(["transfer"])
  }

  changePassword(){
    this.router.navigate(["changePassword"])
  }
}
