
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
  CoursesComponent],
  imports: [
  MaterialModule,
  CommonModule,
  FlexLayoutModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModuleCourses { }
