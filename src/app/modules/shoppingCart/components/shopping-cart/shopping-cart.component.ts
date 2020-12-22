import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  coursesShopping: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'urlImage', 'price', 'actions'];

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart.getListItemsShoppingCartMapCourses()
                    .subscribe((courses: any[]) => this.coursesShopping = courses);
  }
  getTotal(): any
  {
    let total = 0;
    this.coursesShopping.forEach(course => {
      total = total + course.price;
    });
    return total;
  }
  Delete(row: { key: string; }): void
  {
    this.shoppingCart.deleteCourseShoppingCart(row.key);
  }

}
