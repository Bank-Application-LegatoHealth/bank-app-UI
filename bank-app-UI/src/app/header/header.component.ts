import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: BankService, private client: HttpClient,private router : Router) { }
  
  ngOnInit(): void {

    
    // let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    // beforeLoggedInHeader.value
    // console.log(beforeLoggedInHeader)
    // if(sessionStorage.getItem("custName")==null){
    //   this.reloadComponent();
    // // console.log(sessionStorage.getItem("custName"))
    // // this.custNameOnLogin = sessionStorage.getItem("custName")
    // }
    //this.getAccountInfo();
    
  }

  custId = sessionStorage.getItem("custId");
  accountInfo:any;
  err:any;
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
  clearSessions(){
    sessionStorage.clear()
    this.router.navigate(['login']);
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    }
}
