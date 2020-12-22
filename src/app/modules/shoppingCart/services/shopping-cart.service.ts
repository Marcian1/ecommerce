import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseOperation } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
  getListItemsShoppingCart(): Observable<any>
  {
    const cartId = localStorage.getItem('cartId');
    return this.db.list('/shoppingCart/' + cartId + '/items/')
            .snapshotChanges()
            .pipe(

              map((courses: any[]) =>
                      courses.map(c => (
                           {
                             key: c.payload.key, ...c.payload.val()
                           }
                           ))
            ));

  }

deleteCourseShoppingCart(id: string): any
  {
    const cartId = localStorage.getItem('cartId');
    return this.db.object('/shoppingCart/' + cartId + '/items/' + id).remove();
  }


getListItemsShoppingCartMapCourses(): any
{
    const cartId = localStorage.getItem('cartId');
    return this.db.list('/shoppingCart/' + cartId + '/items/')
            .snapshotChanges()
            .pipe(

              map(courses =>
                      courses.map(c => (
                           {

                             key: c.payload.key, ...(c.payload.val() as any).course
                           }
                           ))
            ));

  }
}
