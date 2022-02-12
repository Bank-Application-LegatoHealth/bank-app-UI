import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let afterLoggedInHeader = <HTMLInputElement>document.getElementById("after-login-header");
    afterLoggedInHeader.style.display = "none";

  }
  data = [
    { img: "assets/images/FD-banners-v4-d.gif", title: "" },
    { img: "assets/images/cc-something-fr-everyone-d.jpg", title: "" },
    { img: "assets/images/non-festive-pahl-pre-approved-d.jpg", title: "" },
    { img: "assets/images/pay-flexible-way-d.jpg", title: "" }
  ];

}
