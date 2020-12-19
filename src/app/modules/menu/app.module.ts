
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { MenuTopComponent } from './components/menu-top/menu-top.component';


@NgModule({
  declarations: [
  MenuTopComponent],
  imports: [
    MaterialModule,
  ],
  exports: [MenuTopComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleMenu { }
