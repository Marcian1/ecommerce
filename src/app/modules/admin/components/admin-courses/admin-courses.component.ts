import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseComponent } from 'src/app/modules/courses/components/course/course.component';
import { CourseService } from 'src/app/modules/courses/services/course.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  courses: any[] = [];
  displayedColumns: string[] = ['title', 'categorie',  'price', 'actions'];
  constructor(private serviceCourse: CourseService, private serviceDialog: MatDialog) { }

  ngOnInit(): void {
    this.serviceCourse.getAllCourses()
                      .subscribe(courses => this.courses = courses);
  }

  AddCourse(): void
  {
    this.serviceDialog.open(CourseComponent, {
      width: '650px'
    });

  }
  Edit(row: { key: any; }): void
  {
    this.serviceDialog.open(CourseComponent, {
      width: '650px', data: {id: row.key}
    });
  }
  Delete(row: { key: string; }): void
  {
    if (window.confirm('Are sure you want to delete this course ?')) { this.serviceCourse.deleteCourse(row.key); }

  }
}
