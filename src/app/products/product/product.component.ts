import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from '../shared/product.service'
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() onCartUpdated = new EventEmitter<boolean>();
  products = [];
  lastId = 1;
  productService = new ProductService();

  //constructor(private productService = ProductService) {} cause an Uncaught Error: Can't resolve all parameters for ProductComponent: (?).

  addToCart(product, quantity) {
    console.log('Added');
    new CartService().addItemToCart({
      id: this.lastId++,
      item: product,
      quantity: quantity | 1
    }, quantity);

    this.onCartUpdated.emit(true);
  }

  ngOnInit() {
     this.productService.getProducts()
     .then(list => this.products = list)
     .catch((error) => console.log(error));
  }

}
