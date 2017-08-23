import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from './cart-list/cart-list.component';
import { CartService } from './cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ],
  declarations: [CartListComponent, CartItemComponent, CartComponent],
  providers: [
  ]
})
export class CartModule { }
