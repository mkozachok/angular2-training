
import { Component } from '@angular/core';

import { ProductService } from './components/products/shared';
import { OrderService } from './components/order/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, OrderService]
})
export class AppComponent {
  title = "Angular 2 Shop";
}