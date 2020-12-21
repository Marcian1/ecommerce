import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/modules/courses/services/course.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  courses: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'categorie', 'urlImage', 'price', 'actions'];
  constructor(private serviceCourse: CourseService) { }

  ngOnInit(): void {
    this.serviceCourse.getAllCourses()
                      .subscribe(courses => this.courses = courses);
  }

}
