import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseOperation } from '@angular/fire/database/interfaces';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async AddToCart(course: any): Promise<void>
  {
    const cartId = localStorage.getItem('cartId');
    if (!cartId)
    {
     const cart = await this.db.list('/shoppingCart').push({
        dateCreated: new Date().getTime()
      });
     localStorage.setItem('cartId', cart.key as any);
     this.AddCourseCart(cart.key, course);
    }
    else
    {
      this.AddCourseCart(localStorage.getItem('cartId'), course);
    }
  }
  AddCourseCart(idCart: string | null, courseAdd: { key: FirebaseOperation; }): void
  {
    console.log('addCourse', courseAdd);
    this.db.object('/shoppingCart/' + idCart + '/items/' + courseAdd.key)
             .snapshotChanges()
             .pipe(
               take(1)
             ).subscribe(
              courseCart => {
                console.log(courseCart);
                if (!courseCart.key)
                 {
                   this.db.list('/shoppingCart/' + idCart + '/items/').set(courseAdd.key, {course: courseAdd});
                 }
               }
             );

  }
}
