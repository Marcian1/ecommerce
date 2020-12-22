import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription, from } from 'rxjs';
import { CategorieService } from 'src/app/modules/commun/services/categorie.service';
import { CourseService } from '../../services/course.service';
import {mergeMap, map, switchMap} from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';
import { LoginService } from 'src/app/modules/authen/services/login.service';
import { OrderService } from 'src/app/modules/orders/services/order.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {


  categories: any[] = [];
  courses: any[] = [];
  sub: Subscription = new Subscription();
  coursesShoppingCart: any[] = [];
  courseAcces: any[] = [];

  constructor(private serviceCategorie: CategorieService,
              private serviceCourses: CourseService,
              private serviceShoppingCart: ShoppingCartService,
              private loginService: LoginService,
              private orderService: OrderService) { }

  ngOnInit(): void {
   this.sub = this.serviceCategorie.getAllCategories()
                        .pipe(
                          mergeMap(categories => this.serviceCourses.getAllCourses().pipe(
                            mergeMap(courses => this.serviceShoppingCart.getListItemsShoppingCart().pipe(
                              map(coursesShopping => [categories, courses, coursesShopping])))
                          ))).subscribe(([categories, courses, coursesShopping]) => {
                            this.categories = categories;
                            this.courses = courses;
                            this.coursesShoppingCart = coursesShopping;
                            console.log(courses);
                            console.log(categories);
                          });
   this.loginService.getCurrentUserDb()
                          .pipe(
                            switchMap((userDb: { id: string | number | boolean | null; }) => {
                             return this.orderService.getOrderIdByUserId(userDb.id).pipe(
                               switchMap((items: any[]) => {
                                 const coursesArray: any[] = [];
                                 items.forEach((idOrder: string) => {
                                           this.orderService.getCoursesByIdOrder(idOrder)
                                                             .pipe(
                                                               map(coursesOrders => {
                                                                 return coursesOrders;
                                                               })
                                                             ).subscribe((coursesOrders: any[]) => {
                                                               coursesOrders.forEach(course => {
                                                                 coursesArray.push(course);
                                                               });
                                                             });
                                 });
                                 this.courseAcces = coursesArray;
                                 console.log('coursesArray :', coursesArray);
                                 return coursesArray;
                               })

                              );
                            })
                          ).subscribe(coursesOrder => {

                          });
  }
  getCoursesByCategorie(key: any): any
  {
      return this.courses.filter(course => course.categorie === key);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  AddToCart(course: any): void
  {
    console.log(course);
    this.serviceShoppingCart.AddToCart(course);
  }
  existCourseInShoppingCart(key: any): boolean
  {
   return this.coursesShoppingCart.find((course: any) => course.key === key);
  }
  DeleteToCart(course: { key: any; }): void
  {
    this.serviceShoppingCart.deleteCourseShoppingCart(course.key);
  }

  ExistCoursesById(key: any): boolean
  {
    return this.courseAcces.find((course: any) => course.key === key);
  }

}
