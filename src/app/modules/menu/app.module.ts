
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material-ui.module';
import { MenuTopComponent } from './components/menu-top/menu-top.component';


@NgModule({
  declarations: [
  MenuTopComponent],
  imports: [
    MaterialModule,
    AppRoutingModule
  ],
  exports: [MenuTopComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleMenu { }
