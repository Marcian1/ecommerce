import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/authen/services/login.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  user: any;
  constructor(private login: LoginService) { }

  ngOnInit(): void  {
    this.login.getCurrentUser()
              .pipe(
                switchMap(user => {

                  if ( !user) { return 'e'; }
                  return  this.login.getCurrentUserDb();
                }),
                map(user => user))
                .subscribe( (user: any) => {
                  if ( user !== 'e') { this.user = user; }
                  else {
                  this.user = null;
                  }
                }, (error: any) => console.log(error));

  }
  logout(): void
  {
    this.login.logoutWithGoogle();
  }

}
