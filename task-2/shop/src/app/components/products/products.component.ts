import { Component, OnInit } from '@angular/core';

import { Product, ProductService } from './shared';
import { OrderService} from '../order/order.service'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private orderService: OrderService) {}
  
  addToCart(product) {
    this.orderService.addOrder({
      id: null,
      product_id: product.id,
      quantity: 1,
      price: product.price
    });
  }

  ngOnInit() {
    this.productService.getProducts()
      .then(products => this.products = products);
  }
}