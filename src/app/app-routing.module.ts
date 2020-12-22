import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses.component';
import { AdminService } from './modules/admin/services/admin.service';
import { LoginComponent } from './modules/authen/components/login/login.component';
import { LoginService } from './modules/authen/services/login.service';
import { AboutComponent } from './modules/commun/components/about/about.component';
import { HomeComponent } from './modules/commun/components/home/home.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';
import { SuccesOrderComponent } from './modules/orders/components/succes-order/succes-order.component';
import { ShoppingCartComponent } from './modules/shoppingCart/components/shopping-cart/shopping-cart.component';

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
    component: OrdersComponent,
    canActivate: [ LoginService ]
  },
  {
    path: 'admin-courses',
    component: AdminCoursesComponent,
    canActivate: [ LoginService , AdminService]
  },
  {
    path: 'shooping-cart',
    component: ShoppingCartComponent
  },

  {
    path: 'success-orde/:id',
    component: SuccesOrderComponent,
    canActivate: [LoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
