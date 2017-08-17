import { Component, OnInit } from '@angular/core';

import { OrderService } from '../order/order.service';
import { Order } from '../order/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {

  orders: Order[] = [];
  suma: number = 0;

  deleteOrder(order) {
    this.orderService.deleteOrder(order.id);
    this.orders = this.orderService.getOrders();
  }

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.suma = this.orderService.getQuantity();
  }

  ngDoCheck() {
    this.orders = this.orderService.getOrders();
    this.suma = this.orderService.getQuantity();
  }

}
