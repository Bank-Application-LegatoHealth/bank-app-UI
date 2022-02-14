import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _router : Router ,private _builder :FormBuilder,private service :BankService ){

  }
  custNameOnLogin : any
  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "block";
    
    let afterLoggedInHeader = <HTMLInputElement>document.getElementById("after-login-header");
    afterLoggedInHeader.style.display = "none";
  }

  customer = this._builder.group({
    custId : ['',Validators.compose([Validators.required,Validators.pattern('(?=.*[0-9]).{6,}')])],
    password : ['',Validators.compose([Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
      ])]
  })
  
  loginResponse : any = undefined
  err : any  = undefined
  loggedIn :boolean = false
  loginSubmit() : void{
    let cust = this.customer.controls['custId'].value;
    let pass = this.customer.controls['password'].value;
    let customerBody = {
      "custId" : cust,
      "password" : pass
    }
    console.log(cust)
    this.service.login(customerBody).subscribe(response => {
      let doc :undefined;
      this.loginResponse = response;
      console.log(response);
      sessionStorage.setItem("custId",customerBody.custId)
      sessionStorage.setItem("isLoggedIn",`${this.loggedIn}`)
      this.storeUserInfo(customerBody.custId);

      //storing custName
      // this.custNameOnLogin = sessionStorage.getItem("custName")
      // console.log(this.custNameOnLogin)
      // console.log(sessionStorage.getItem("custName"))

      this._router.navigate(["getInfo"])
      console.log("Inside getInfo : "+sessionStorage.getItem("custId"))
      }, err => {
        this.err = err;
        console.log(this.err.error.message);
        this._router.navigate(["login"])
        this.customer.reset()
      })
    }

    accountDetsOnLogin : any
    storeUserInfo(id : any){
    this.service.getAccountDetails(id).subscribe(
      (response: any) => {
        sessionStorage.setItem("custName",response.custName)
        console.log("StoreInfo name: "+sessionStorage.getItem("custName"))
      }, err => {
        this.err = err;
      }
    )
    }
}
