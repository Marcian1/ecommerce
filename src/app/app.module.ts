import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-ui.module';
import { AppModuleAdmin } from './modules/admin/app.module';
import { AppModuleAuth } from './modules/authen/app.module';
import { AppModuleCommun } from './modules/commun/app.module';
import { AppModuleCourses } from './modules/courses/app.module';
import { AppModuleMenu } from './modules/menu/app.module';
import { AppModuleOrder } from './modules/orders/app.module';
import { AppModuleUsers } from './modules/users/app.module';
import { AppModuleShoppingCart } from './modules/shoppingCart/app.module';
import { AppModulePayment } from './modules/payment/app.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppModuleAdmin,
    AppModuleAuth,
    AppModuleCommun,
    AppModuleCourses,
    AppModuleMenu,
    AppModuleOrder,
    AppModuleUsers,
    AppModuleShoppingCart,
    AppModulePayment
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
