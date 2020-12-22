import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CourseComponent } from './components/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  CoursesComponent,
  CourseComponent],
  imports: [
  MaterialModule,
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModuleCourses { }
