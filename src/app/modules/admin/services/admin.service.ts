import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../authen/services/login.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements CanActivate {
  constructor(private login: LoginService, private route: Router) {}
  canActivate(): any {
    return this.login.getCurrentUserDb().pipe(
      map((user) => {
        if (!user) {
          return false;
        }
        const userJson = JSON.stringify(user);
        const userJsonObj = JSON.parse(userJson);
        if (userJsonObj.isAdmin === true) {
          return true;
        } else {
          this.route.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
