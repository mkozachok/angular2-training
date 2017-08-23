import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module'
import { CartModule } from './cart/cart.module'
import { CartService } from './cart/cart.service';
import { OptionalComponent } from './optional/optional.component';
import { ChangeStyleDirective } from './directives/change-style.directive'
import { RandomService } from './common/random.service';

@NgModule({
  declarations: [
    AppComponent,
    OptionalComponent,
    ChangeStyleDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule
  ],
  providers: [
    CartService,
    RandomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
