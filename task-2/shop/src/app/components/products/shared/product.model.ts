export enum ProductCategory {
  Laptop = 0,
  Smartphone = 1,
  Tablet = 2
}


export class Product {
  id: number;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  isAvailable: boolean;
}