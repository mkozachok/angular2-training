import { Injectable } from '@angular/core';

import { Order } from './order.model';

@Injectable()
export class OrderService {
  lastId = 0;
  orders = [];

  constructor() {}

  //post
  addOrder(order: Order): OrderService {
    if (!order.id) {
      order.id = ++this.lastId;
    }
    let foundOrder = this.getOrderByProductId(order.product_id);
    if (foundOrder) {
      foundOrder.quantity++;
      this.updateOrder(foundOrder.id, foundOrder)
    } else {
      this.orders.push(order);
    }
    return this;
  }

  updateOrder(id:number, value:Order): Order {
    let order = this.getOrderById(id);
    if (!order) {
      return null;
    }
    Object.assign(order, value);
    return order;
  }

  //delete
  deleteOrder(id:number): OrderService {
    this.orders = this.orders.filter(order => order.id !== id);
    return this;
  }

  //get
  getOrders(): Order[] {
    return this.orders;
  }

  //get one
  getOrderById(id:number): Order {
    return this.orders
      .filter(order => order.id === id)
      .pop();
  }
      //get one
  getOrderByProductId(id:number): Order {
    return this.orders
      .filter(order => order.product_id === id)
      .pop();
  }

  getQuantity(): number {
    if (this.orders[0]) {
      return this.orders.reduce((a, b) => a + b.quantity, 0);
    } else {
      return 0;
    }
  }
}