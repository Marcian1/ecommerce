import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../authen/services/login.service';
import { UserService } from '../../users/services/user.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate{

  constructor(private db: AngularFireDatabase, private login: LoginService, private userService: UserService, private route: Router) { }
  canActivate(): any
  {
  return this.login.getCurrentUserDb()
              .pipe(
                map(user => {
                     if (!user) { return false; }
                     const userJson = JSON.stringify(user);
                     const userJsonObj = JSON.parse(userJson);
                     if (userJsonObj.isAdmin === true) {
                      return true; }
                     else {
                      this.route.navigate(['/login']);
                      return false;
                     }
                })
              );


 }
}
