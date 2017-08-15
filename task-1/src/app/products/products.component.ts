import { Component, OnInit } from '@angular/core';

import { Product, ProductService } from './shared';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts()
      .then(products => this.products = products);
  }
}