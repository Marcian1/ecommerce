import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LoginService } from 'src/app/modules/authen/services/login.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css'],
})
export class MenuTopComponent implements OnInit {
  user: any;
  nbrShoppingCourse = 0;
  constructor(
    private login: LoginService,
    private shoppingCart: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.login
      .getCurrentUser()
      .pipe(
        switchMap((user) => {
          if (!user) {
            return 'e';
          }
          return this.login.getCurrentUserDb();
        }),
        mergeMap((userDb) =>
          this.shoppingCart.getListItemsShoppingCart().pipe(
            map((coursesShopping) => {
              return [userDb, coursesShopping];
            })
          )
        )
      )
      .subscribe(
        (arr: any[]) => {
          const userDb = arr[0];
          const coursesShopping = arr[1];
          this.nbrShoppingCourse = (coursesShopping as any[]).length;
          if (userDb !== 'e') {
            this.user = userDb;
          } else {
            this.user = null;
          }
        },
        (error: any) => console.log(error)
      );
  }
  logout(): void {
    this.user = null;
    this.login.logoutWithGoogle();
  }

  recapShopping(): void {
    if (this.nbrShoppingCourse <= 0) {
      return;
    }
    this.router.navigate(['/shooping-cart']);
  }
  justLogin(): void {
    this.login.loginWithGoogle();
  }
  open(menu: { openMenu: () => void }): void {
    menu.openMenu();
  }
}
