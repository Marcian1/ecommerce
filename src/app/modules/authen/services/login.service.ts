import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../../users/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements CanActivate {
  constructor(
    private login: AngularFireAuth,
    private router: Router,
    private serviceUser: UserService
  ) {
    this.login.authState.subscribe((user) => this.serviceUser.saveUser(user));
  }

  loginWithGoogle(): any {
    this.login.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logoutWithGoogle(): any {
    this.router.navigate(['/']);
    return this.login.signOut();
  }
  getCurrentUser(): any {
    return this.login.authState;
  }
  canActivate(): Observable<boolean> {
    return this.login.authState.pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
  getCurrentUserDb(): Observable<any> {
    return this.login.authState.pipe(
      switchMap((user) => {
        try {
          if (!user) {
            const obj = new Observable<any>();
            console.log('USER IS NULL!');
            return obj;
          }
          return this.serviceUser.getUserByuid(user.uid);
        } catch (error) {
          console.log(error);
        }
      }),
      map((user) => {
        return user;
      })
    );
  }
}
