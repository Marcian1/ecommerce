import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  saveUser(user: any): void
  {
    if (!user) { return; }
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

}
