import { Component, OnInit } from '@angular/core';


import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';




@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {


  constructor(public fb: FormBuilder, private router: Router, private service: BankService) {

  }
  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
  }


  transferBody = this.fb.group({
    detAccNo: ['', Validators.compose([Validators.required, Validators.nullValidator])],
    custName: ['', Validators.compose([Validators.required, Validators.nullValidator])],
    ifsc: ['', Validators.compose([Validators.required, Validators.nullValidator])],
    amount: ['', Validators.compose([Validators.required, Validators.nullValidator])],
    transPass: ['', Validators.compose([Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
    ])]
  })

  transferResponse: any = undefined
  err: any = undefined
  hideEle = false;
  hideBtn = true;
  isShowSucc = true;
  isShowFail = true;
  transferSubmit(): void {
    let detAccNo = this.transferBody.controls['detAccNo'].value;
    let custName = this.transferBody.controls['custName'].value;
    let ifsc = this.transferBody.controls['ifsc'].value;
    let amount = this.transferBody.controls['amount'].value;
    let transPass = this.transferBody.controls['transPass'].value;
    let custId = sessionStorage.getItem('custId');

    let transferModel = {
      "detAccNo": detAccNo,
      "custName": custName,
      "ifsc": ifsc,
      "amount": amount,
      "transPass": transPass,
      "custId": custId
    }

    this.service.performTransaction(transferModel).subscribe(response => {
      this.transferResponse = response;
      console.log(response);
      //this.transferBody.reset()
      let resetSucc = <HTMLInputElement>document.getElementById("myForm");
      resetSucc.requestFullscreen()
      this.hideBtn = true;
      this.hideEle = false;
    }, err => {
      this.err = err;
      console.log(this.err.error.message);
      //this.transferBody.reset()
      this.hideBtn = true;
      this.hideEle = false;
    })
  }
  transferClick(): any {
    console.log("Clicked The Button");
    this.hideEle = true;
    this.hideBtn = false;
  }

  onSuccess() {
    this.router.navigate(["getInfo"])
  }
  onFailure() {
    this.router.navigate(["getInfo"])
  }


  transactionClicked() {
    this.router.navigate(["transDetails"])
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
