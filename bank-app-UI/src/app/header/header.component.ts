import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: BankService, private client: HttpClient) { }

  ngOnInit(): void {
    this.getAccountInfo();
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
  }
}
