import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { OrderByPipe } from '../pipes/order-by.pipe'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent
  ],
  declarations: [
    ProductComponent,
    OrderByPipe
  ]
})
export class ProductsModule { }
