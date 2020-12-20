
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  CoursesComponent],
  imports: [
  MaterialModule,
  CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModuleCourses { }
