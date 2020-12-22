import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription, from } from 'rxjs';
import { CategorieService } from 'src/app/modules/commun/services/categorie.service';
import { CourseService } from '../../services/course.service';
import {mergeMap, map} from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {


  categories: any[] = [];
  courses: any[] = [];
  sub: Subscription = new Subscription();

  constructor(private serviceCategorie: CategorieService,
              private serviceCourses: CourseService,
              private serviceShoppingCart: ShoppingCartService) { }
  ngOnInit(): void {
   this.sub = this.serviceCategorie.getAllCategories()
                        .pipe(
                          mergeMap(categories => this.serviceCourses.getAllCourses().pipe(
                            map(courses => [categories , courses])
                          ))).subscribe(([categories, courses]) => {
                            this.categories = categories;
                            this.courses = courses;
                            console.log(courses);
                            console.log(categories);
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

}
