import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormsModule , ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import { BankService } from '../bank.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  
  constructor(private _router : Router ,private _builder :FormBuilder,
    private service :BankService) {
    
  }

  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    
  }
  transaction  = this._builder.group({
    transShow: ['', []],
    transFromDate : ['', [Validators.required]],
    transToDate : ['', [Validators.required]],
    transType : ['',[Validators.required]]
  })

  fromDate = new Date();
  toDate = new Date();
  
  isFilterSet : boolean = false;
  startDate :any
  endDate : any
  transType : any
  transactionType :any = ['Credit','Debit']
  err : any
  displayTable : boolean = false;
  _transaction: Transaction[] = [];
  errInvalidDate : any
  invalidDate : boolean = false
  isSubmitted = false;

  errorNoTrans : any 

  emptyDatesInvalid : boolean = (this.transaction.controls["transFromDate"].valid &&
  this.transaction.controls["transFromDate"].valid) ? false : true ;

  emptyDatesMessage = "Date cannot be empty"
  isShowDateEnabled : boolean = false;
  requestBody : any
  requestBodyExcel : any
  excelResponse : any

  optionValue : any

  getTransactions(){
    let showVal = this.transaction.controls["transShow"].value;
    console.log(this.transaction.controls["transShow"].value)
    console.log(this.transaction.controls["transFromDate"].value)
    console.log(this.transaction.controls["transToDate"].value)
    console.log(this.transaction.controls["transType"].value)
    //Setting filterSet value based transShow value
    if(this.transaction.controls["transShow"].value == "showAll"){
      this.isFilterSet = false;
    }
    else{
      this.isFilterSet = true;
    }

    this.optionValue = this.transaction.controls['transType'].value

    if(this.transaction.controls["transShow"].value == "showType"){
      if(this.optionValue.includes("Credit")){ // 1. CREDIT //2. DEBIT
        this.transType = "CREDIT"
      }else if(this.optionValue.includes("Debit")){
        this.transType = "DEBIT"
      }
      this.isFilterSet = true;
    }else{
      this.transType = null
    }

    console.log("is filter set : "+this.isFilterSet)
    //Setting start and end date values based on radio buton
    if(showVal === "showDate"){
      this.startDate = this.transaction.controls["transFromDate"].value;
      this.endDate = this.transaction.controls["transToDate"].value;
      this.transType = null
    }
    else{

      this.startDate = null
      this.endDate = null
    }
    this.requestBody = {
      "fromDate" : this.startDate,
      "toDate" : this.endDate,
      "transType" : this.transType,
      "filterSet" : this.isFilterSet
    }

    this.requestBodyExcel = Object.assign({},this.requestBody)
    console.log("Excel : "+this.requestBodyExcel.transType+" "+this.requestBodyExcel.filterSet)
   
      this.service.getTransactionDetails(this.requestBody).subscribe(
        (response : any) => {
          console.log(response)
          console.log(response.length)
          this._transaction = response;
          this.displayTable = true;
          this.errorNoTrans = false
        },
        err => {
          this.errorNoTrans = err;
        }
      )
  }

  downloadExcel(){
    this.service.downloadExcel(this.requestBodyExcel).subscribe((response :Blob) => {
      this.excelResponse = response;
      // this.downloadFile(response)
          
      console.log(response)
    },err =>{
      console.log(err)
    })
  }

  // downloadFile(data: Response) {
  //   const blob = new Blob([data], { type: 'application/octet-stream' });
  //   const url= window.URL.createObjectURL(blob);
  //   window.open(url);
  // }

  compareDates(){

    let startDt = (document.getElementById("fromDate") as HTMLInputElement).value;
    
    let endDt = (document.getElementById("toDate") as HTMLInputElement).value;

    if( (new Date(startDt).getTime() > new Date(endDt).getTime()))
    {
        this.invalidDate = true
        this.errInvalidDate = "Please select valid dates. End date must not be smaller than start date"
    }else{
      this.invalidDate = false
    }
  }

   // Choose city using select dropdown
  changeTransactionType(e : any) : any {
    this.transaction.controls['transType'].setValue(e.target.value, {
      onlySelf: true
    })
  }

  enableDates(){
    this.displayTable = false
    this.isShowDateEnabled = true;
  }

  disableDates(){
    this.displayTable = false
    this.isShowDateEnabled = false;
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
