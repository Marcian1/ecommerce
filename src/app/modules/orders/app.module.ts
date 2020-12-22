import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material-ui.module';
import { OrdersComponent } from './components/orders/orders.component';


@NgModule({
    declarations: [OrdersComponent],
    imports: [
      MaterialModule,
      CommonModule,
      FlexLayoutModule
    ],
    exports: [],
    providers: [],
    bootstrap: []
  })
  export class AppModuleOrder{ }
