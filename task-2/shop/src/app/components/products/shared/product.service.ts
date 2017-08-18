import { Injectable } from '@angular/core';

import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {
  getProducts() {
    return Promise.resolve(PRODUCTS);
  }
  getProductById(id: number) {
    return Promise.resolve(
      PRODUCTS.filter(item => item.id === id)
    );
  }
}