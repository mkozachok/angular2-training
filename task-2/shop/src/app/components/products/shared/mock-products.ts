import { Product, ProductCategory } from './product.model';

export const PRODUCTS: Product[] = [
  {id: 101, name: 'Iphone 4s', description: 'A smartphone that was designed and marketed by Apple Inc.', category: ProductCategory.Smartphone, price: 100, isAvailable: true},
  {id: 102, name: 'Iphone 5s', description: 'A smartphone that was designed and marketed by Apple Inc.', category: ProductCategory.Smartphone, price: 250, isAvailable: true},
  {id: 103, name: 'Iphone 6s', description: 'A smartphone that was designed and marketed by Apple Inc.', category: ProductCategory.Smartphone, price: 500, isAvailable: true},
  {id: 104, name: 'Iphone 7', description: 'A smartphone that was designed and marketed by Apple Inc.', category: ProductCategory.Smartphone, price: 800, isAvailable: true}
];