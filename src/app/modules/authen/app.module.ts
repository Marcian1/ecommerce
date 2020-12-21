
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from 'src/app/material-ui.module';

@NgModule({
  declarations: [
  LoginComponent],
  imports: [
  MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModuleAuth{ }
