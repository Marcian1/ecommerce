import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
    declarations: [ShoppingCartComponent],
    imports: [
  MaterialModule,
  CommonModule,
    ],
    exports: [],
    providers: [],
    bootstrap: []
  })
  export class AppModuleShoppingCart{ }
