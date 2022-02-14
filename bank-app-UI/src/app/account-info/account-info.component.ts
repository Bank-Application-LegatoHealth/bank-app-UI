import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(private service: BankService, private client: HttpClient,private router:Router) { }
  custNo:any;
  

  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    let afterLoggedInHeader = <HTMLInputElement>document.getElementById("after-login-header");
    afterLoggedInHeader.style.display = "block";
    this.custNo = sessionStorage.getItem("custId")
    if (this.custNo == null){
      this.router.navigate(["unAuthUser"])
    }
    this.getAccountInfo()
  }
  accountInfo: any;
  err: any;
  custId:any;
  getAccountInfo() {
    this.custId = sessionStorage.getItem("custId")
    this.service.getAccountDetails(sessionStorage.getItem("custId")).subscribe(
      (response: any) => {
        this.accountInfo = response;
      
      }, err => {
        this.err = err;
      }
    )
  }
  transactionClicked() {
    console.log("data clicked")
    this.router.navigate(['transDetails']);

  }

  getInfo() {
    this.router.navigate(["getInfo"])
  }

  transfer() {
    this.router.navigate(["transfer"])
  }

  changePassword() {
    this.router.navigate(["changePassword"])
  }
}
