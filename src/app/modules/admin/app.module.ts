
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';


@NgModule({
  declarations: [
  AdminCoursesComponent],
  imports: [
    MaterialModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModuleAdmin { }
