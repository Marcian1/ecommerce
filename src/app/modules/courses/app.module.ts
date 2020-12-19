
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { CoursesComponent } from './components/courses/courses.component';


@NgModule({
  declarations: [
  CoursesComponent],
  imports: [
  MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModuleCourses { }
