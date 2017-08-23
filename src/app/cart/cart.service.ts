import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { Product, ProductCategory } from '../products/shared/product.model';
import { Cart } from './cart.model';

let cartList = [];
let cartQuantity = 0;
let cartAmount = 0;

@Injectable()
export class CartService {

  q = 0;

  getCartList(): Cart[]{
    return cartList;
  }

  getCartQuantity(): number {
    return cartQuantity;
  }

  getCartAmount(): number {
    return cartAmount;
  }

  addItemToCart(newCart: Cart, quantity?: number): void {
    quantity = quantity | 1;
    const matchedItem = cartList.find(cart => cart.item.id === newCart.item.id);
    if (!matchedItem) {
      cartList.push(newCart);
    } else {
      this.updatedItemQuantity(matchedItem.id, matchedItem.quantity + quantity);
    }
    this.calculateCart();
  }

  updatedItemQuantity(id: number, quantity: number) {
      const matchedItem = this.getCartList().find(cart => cart.id === id);
      matchedItem.quantity = quantity;
      this.calculateCart();
  }

  removeItem(cart): void {
    let index = cartList.indexOf(cart);
    if (index > -1) {
      cartList.splice(index, 1);
      this.calculateCart();
    }
  }

  emptyCart() {
    cartList.length = 0;
    cartQuantity = 0;
    cartAmount = 0;
  }

  calculateCart() {
    cartQuantity = cartList.reduce((a, b) => a + b.quantity, 0);
    cartAmount = cartList.reduce((a, b) => a + b.quantity * b.item.price, 0);
  }

}