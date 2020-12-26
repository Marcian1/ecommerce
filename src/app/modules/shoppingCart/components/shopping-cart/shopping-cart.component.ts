import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  coursesShopping: any[] = [];
  displayedColumns: string[] = ['title',  'price', 'actions'];

  constructor(private shoppingCart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCart.getListItemsShoppingCartMapCourses()
                    .subscribe((courses: any[]) => this.coursesShopping = courses);
  }
  getTotal(): any
  {
    let total = 0;
    if (!this.coursesShopping) { return total; }
    this.coursesShopping.forEach(course => {
      total = total + course.price;
    });
    return total;
  }
  Delete(row: { key: string; }): void
  {
    this.shoppingCart.deleteCourseShoppingCart(row.key);
  }
  OnNext(): void
  {
    this.router.navigate(['/orders']);
  }

}
