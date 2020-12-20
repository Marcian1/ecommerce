import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/modules/commun/services/categorie.service';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  categories: any[] = [];

  constructor(private serviceCategorie: CategorieService, private serviceCourses: CourseService) { }

  ngOnInit(): void {
    this.serviceCategorie.getAllCategories().subscribe(categories => this.categories = categories);
    this.serviceCourses.getAllCourses().subscribe(courses => console.log(courses));
  }

}
