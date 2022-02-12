import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankService } from '../bank.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-service-menu',
  templateUrl: './service-menu.component.html',
  styleUrls: ['./service-menu.component.css']
})
export class ServiceMenuComponent implements OnInit {

  constructor(private router:Router) { 

  }
  showPrice :Boolean = true;
  ngOnInit(): void {
  
  }
  
   
  transactionClicked(){
  
    console.log("data clicked")
   // this.router.navigate(["transDetails"]);
    this.router.navigate(['getInfo/transDetails']);
    
  }




}
