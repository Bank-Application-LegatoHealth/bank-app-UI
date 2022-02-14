import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized-user',
  templateUrl: './unauthorized-user.component.html',
  styleUrls: ['./unauthorized-user.component.css']
})
export class UnauthorizedUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let beforeLoggedInHeader = <HTMLInputElement>document.getElementById("before-login-header");
    beforeLoggedInHeader.style.display = "none";
    let afterLoggedInHeader = <HTMLInputElement>document.getElementById("after-login-header");
    afterLoggedInHeader.style.display = "none";
    let footer = <HTMLInputElement>document.getElementById("footer");
    footer.style.display = "none";
    
  }

}
