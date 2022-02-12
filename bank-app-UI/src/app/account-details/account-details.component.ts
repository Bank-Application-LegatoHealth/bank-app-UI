import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
  template: `
  <div>
    <button (click)='coins()'>Deposit Coins</button>
    <button (click)='notes()'>Deposit notes</button>
    <p>
    </p>
  </div>
`
})
export class AccountDetailsComponent implements OnInit {

  constructor(private service :BankService, private client :HttpClient,private router:Router, private route :ActivatedRoute) { 

  }
  showPrice :Boolean = true;
  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    let afterLoggedInHeader = <HTMLInputElement>document.getElementById("after-login-header");
    afterLoggedInHeader.style.display= "block";
    let afterLoginHeader
    let custNo = sessionStorage.getItem("custId")
    console.log(sessionStorage.getItem("custId"));
    this.getAccountInfo()
  }
  
   accountInfo :any;
   err : any;
   getAccountInfo() {
    this.service.getAccountDetails(sessionStorage.getItem("custId")).subscribe(
      response => {
        this.accountInfo = response;
        console.log(this.accountInfo);
        
      }, err=>{
        this.err =  err;
      }
    )
  }
  transactionClicked(){
    console.log(this.route);
    console.log("data clicked")
   // this.router.navigate(["transDetails"]);
    this.router.navigate(['getInfo/transDetails']);
    
  }




}


