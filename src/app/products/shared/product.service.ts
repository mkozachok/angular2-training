import { Injectable } from '@angular/core';

import { Product, ProductCategory } from './product.model';

const productList = [
  new Product(101, 'Iphone 4s', 'A smartphone that was designed and marketed by Apple Inc.', ProductCategory.Smartphone, 100, true),
  new Product(102, 'Iphone 5s', 'A smartphone that was designed and marketed by Apple Inc.', ProductCategory.Smartphone, 200, true),
  new Product(103, 'Iphone 6s', 'A smartphone that was designed and marketed by Apple Inc.', ProductCategory.Smartphone, 400, true),
  new Product(104, 'Iphone 7', 'A smartphone that was designed and marketed by Apple Inc.', ProductCategory.Smartphone, 800, true),
];

@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return Promise.resolve(productList);
  }

  getProductById(id: number): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === id))
      .catch(() => Promise.reject('Error in getProductById methood.'));
  }

  addProduct(product: Product): void {
    productList.push(product);
  }

}