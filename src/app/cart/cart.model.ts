import { Product, ProductCategory } from '../products/shared/product.model';

export class  Cart {
  constructor(
    public id: number,
    public item : Product, // not sure
    public quantity?: number
  ) {
    this.quantity = 1;
  }
}