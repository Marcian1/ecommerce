
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { AppModuleCourses } from '../courses/app.module';
import { CourseComponent } from '../courses/components/course/course.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';


@NgModule({
  declarations: [
  AdminCoursesComponent],
  imports: [
    MaterialModule,
    CommonModule,
    AppModuleCourses
  ],
    exports: [AdminCoursesComponent],
    entryComponents: [CourseComponent],

  providers: [],
  bootstrap: []
})
export class AppModuleAdmin { }
