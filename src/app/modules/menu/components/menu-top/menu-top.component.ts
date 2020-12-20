import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/authen/services/login.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }
  logout(): void
  {
    this.login.logoutWithGoogle();
  }

}
