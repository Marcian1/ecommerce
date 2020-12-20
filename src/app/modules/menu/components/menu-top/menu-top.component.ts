import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/authen/services/login.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  user: any;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.login.getCurrentUser()
              .subscribe((user: any) => this.user = user);
  }
  logout(): void
  {
    this.login.logoutWithGoogle();
  }

}
