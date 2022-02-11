import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private service :BankService, private client :HttpClient) { 

  }

  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    let custNo = sessionStorage.getItem("custId")
    console.log(sessionStorage.getItem("custId"));
    let name = "Seema";
    // (document.getElementById('custId') as HTMLAnchorElement). = sessionStorage.getItem("custId");
    // let val = document.getElementById('custId')
    // console.log("value : "+val)
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




}


