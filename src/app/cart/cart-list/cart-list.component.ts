import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnChanges {
  @Input() cartList = [];
  @Input() q: number;
  @Output() remove = new EventEmitter();
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('changed');
  }
  onUpdate(item, quantity) {
    this.cartService.updatedItemQuantity(item, quantity);
  }
  onRemove(item) {
    this.remove.emit(item);
  }

}
