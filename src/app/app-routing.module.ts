import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses.component';
import { LoginComponent } from './modules/authen/components/login/login.component';
import { AboutComponent } from './modules/commun/components/about/about.component';
import { HomeComponent } from './modules/commun/components/home/home.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'admin-courses',
    component: AdminCoursesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
