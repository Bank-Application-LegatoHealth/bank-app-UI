import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { AccountDetailsComponent } from '../account-details/account-details.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  accountNameOnLogin:any
  custNo :any
  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";

    this.accountNameOnLogin = sessionStorage.getItem("custName")
    //navigate un-authorized user to login page
    this.custNo = sessionStorage.getItem("custId")
    if (this.custNo == null){
      this.router.navigate(["unAuthUser"])
    }
  }


  constructor(public fb: FormBuilder, private router: Router,private _builder :FormBuilder, private service :BankService) {
    
  }

  displayTable : boolean = false;

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

  disableDates(){
    this.displayTable = false
  }
 

  password = this._builder.group({
    passwordtype : [''],
    oldpassword : ['',Validators.required, Validators.nullValidator],
    newpassword : ['',Validators.compose([Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
      ])],
    confirmpassword : ['',Validators.compose([Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')
      ])]
  })

  changePasswordAPIResponse : any = undefined
  err : any  = undefined
  loggedIn :boolean = false
  passwordenumType :any = ['LOGIN','TRANSACTION']
  optionValue : any
  passwordTypeSelected : any

 //For Dropdown values LOGIN and TRANSACTION
  updatePassword(e: any) : any{
    this.password.controls['passwordtype'].setValue(e.target.value, {
      onlySelf: true
      })
    console.log(this.password.controls['passwordtype'].value);
    this.passwordTypeSelected=this.password.controls['passwordtype'].value;
    }

  passwordchange(): void{
   
    // let tempcustId: any= sessionStorage.getItem('custId')
    // let custId: number = +tempcustId;
    let newPassword= this.password.controls['newpassword'].value;
    let confirmPassword=this.password.controls['confirmpassword'].value;
    let oldPassword=this.password.controls['oldpassword'].value;

    console.log(this.password.value)
    
    let changePasswordAPIBody={
      "custId" : sessionStorage.getItem('custId'),
      "newPassword": newPassword,
      "confirmPassword": confirmPassword,
      "oldPassword": oldPassword,
      "passwordType": this.passwordTypeSelected
    }
    console.log(changePasswordAPIBody);
    this.service.changePassword(changePasswordAPIBody).subscribe(response => {
      let doc:undefined;
      this.changePasswordAPIResponse=response;
      console.log(response);
      this.router.navigate(["getInfo"]);

      }, err => {
        this.err = err;
        console.log(this.err.error.message);
        this.router.navigate(["changePassword"])
        this.password.reset()
      })
  }
}
