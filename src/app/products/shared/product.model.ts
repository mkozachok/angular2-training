export enum ProductCategory {
  Laptop = 0,
  Smartphone = 1,
  Tablet = 2
}

export class Product {
  constructor (
    public id: number,
    public name: string,
    public description: string,
    public category: ProductCategory,
    public price: number,
    public isAvailable?: boolean,
  ) {
    this.isAvailable = true;
  }
}