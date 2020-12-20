import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private login: AngularFireAuth) {
    this.login.authState
    .subscribe(user => console.log(user));
  }

  loginWithGoogle(): any {
       this.login
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logoutWithGoogle(): any
  {
    return this.login.signOut();
  }
}
