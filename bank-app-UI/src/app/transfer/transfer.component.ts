import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(public fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
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
