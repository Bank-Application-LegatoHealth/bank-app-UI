import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountInfoModel } from '../account-info-model';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],

})
export class AccountDetailsComponent implements OnInit {
 
  custNo: any;
  constructor(private service: BankService, private client: HttpClient, private router: Router, private route: ActivatedRoute) {

  }
  accountInfoModel: AccountInfoModel = new AccountInfoModel();
  showPrice: Boolean = true;
  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    let afterLoggedInHeader = <HTMLInputElement>document.getElementById("after-login-header");
    afterLoggedInHeader.style.display = "block";

    //navigate un-authorized user to login page
    this.custNo = sessionStorage.getItem("custId")
    if (this.custNo == null){
      this.router.navigate(["unAuthUser"])
    }
    this.getAccountInfo()

  }
  showBalence: boolean = true;
  hideBalence: boolean = true;
  showAccountNumber: boolean = true;
  hideAccountNumber: boolean = true;
  accountInfo: any;
  accountNumber: any;
  accountBalance: any;
  err: any;
  custId:any;
  getAccountInfo() {
    this.custId = sessionStorage.getItem("custId")
    this.service.getAccountDetails(sessionStorage.getItem("custId")).subscribe(
      (response: any) => {
        this.accountInfo = response;
        this.accountBalance = this.accountInfo.avlbalance.toString().replace(new RegExp("[0-9]", "g"), "X");
        this.accountNumber = this.accountInfo.accNumber.toString().replace(new RegExp("[0-9]", "g"), "X");
        this.accountInfoModel = response;

      }, err => {
        this.err = err;
      }
    )
  }
  showBalanceClicked() {
    if (this.showBalence) {
      this.accountBalance = this.accountInfo.avlbalance;
      this.showBalence = false;
      this.hideBalence = true;

    } else {
      this.accountBalance = this.accountInfo.avlbalance.toString().replace(new RegExp("[0-9]", "g"), "X");
      this.showBalence = true;
      this.hideBalence = false;

    }
  }
  showAccountClicked() {
    if (this.showAccountNumber) {
      this.accountNumber = this.accountInfo.accNumber;
      this.showAccountNumber = false;
      this.hideAccountNumber = true;

    } else {
      this.accountNumber = this.accountInfo.accNumber.toString().replace(new RegExp("[0-9]", "g"), "X");
      this.showAccountNumber = true;
      this.hideAccountNumber = false;

    }
  }
  transactionClicked() {
    console.log(this.route);
    console.log("data clicked")
    // this.router.navigate(["transDetails"]);
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
  goToAccountDetails() {
    this.router.navigate(["accountInfo"])
  }



}


