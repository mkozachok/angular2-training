import { Component, OnInit, Output, 
  AfterContentChecked } from '@angular/core';

import { CartService } from './cart.service';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterContentChecked {
  cartList: Array<Cart>;
  cartQuantity = 0;
  cartAmount = 0;
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
     this.cartList = this.cartService.getCartList();
     this.cartQuantity = this.cartService.getCartQuantity();
     this.cartAmount = this.cartService.getCartAmount();
  }

  ngAfterContentChecked() {
    console.log('checked');
     this.cartQuantity = this.cartService.getCartQuantity();
     this.cartAmount = this.cartService.getCartAmount();
  }

  remove(cart) {
    this.cartService.removeItem(cart);
  }

  emptyCart() {
    this.cartService.emptyCart();
  }

}
