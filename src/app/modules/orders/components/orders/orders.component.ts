import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  coursesOrder: any[] = [];
  displayedColumns: string[] = ['title', 'urlImage', 'price'];

  constructor(private shoppingCart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCart.getListItemsShoppingCartMapCourses()
    .subscribe((courses: any[]) => this.coursesOrder = courses);
  }

  getTotal(): any
  {
    let total = 0;
    if (!this.coursesOrder) { return total; }
    this.coursesOrder.forEach(course => {
      total = total + course.price;
    });
    return total;
  }

  OnCancel(): void
  {
    this.router.navigate(['/courses']);

  }
  OnPay(): void{

  }

}
