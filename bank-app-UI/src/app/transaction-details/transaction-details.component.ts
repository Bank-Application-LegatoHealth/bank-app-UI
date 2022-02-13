import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormsModule , ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import { BankService } from '../bank.service';
import Transaction from '../models/Transaction';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  
  constructor(private _router : Router ,private _builder :FormBuilder,private service :BankService) {
    
  }

  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    
  }

  fromDate = new Date();
  toDate = new Date();
  
  isFilterSet : boolean = false;
  transactionType :any = ['Credit','Debit']
  Transaction :any
  err : any
  transactions :  any;

  transaction  = this._builder.group({
    // radioGroup: ['', [Validators.required]]
  })


  // changeTransType(e : any)  {
  //   this.transaction.radioGroup.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }

  getTransactions(){

    let requestBody = {
      "fromDate" : null,
      "toDate" : null,
      "transType" : null,
      "filterSet" : false
    }
    if(!this.isFilterSet){
      this.service.getTransactionDetails(requestBody).subscribe(
        (response : any) => {
          console.log(response)
          console.log(response.length)
          this.transactions = response;
        },
        err => {
          this.err = err;
        }
      )
    }
  }

  transactionClicked(){
    this._router.navigate(["transDetails"])
  }

  getInfo(){
    this._router.navigate(["getInfo"])
  }

  transfer(){
    this._router.navigate(["transfer"])
  }

  changePassword(){
    this._router.navigate(["changePassword"])
  }
}
