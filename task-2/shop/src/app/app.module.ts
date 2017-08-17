import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    OrderComponent,
    CartComponent
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }