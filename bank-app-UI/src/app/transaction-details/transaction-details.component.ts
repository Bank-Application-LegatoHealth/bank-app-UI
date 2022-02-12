import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  
  constructor(public fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    
  }

  registrationForm :any = this.fb.group({
    radioGroup: ['', [Validators.required]]
  })

  isFilterSet : boolean = false;
  transactionType :any = ['Credit','Debit']

  changeTransType(e : any)  {
    this.registrationForm.Ttype.setValue(e.target.value, {
      onlySelf: true
    })
  }

  getTransactions(){

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
