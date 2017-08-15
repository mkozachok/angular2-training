import { Component } from '@angular/core';

import { ProductService } from './products/shared';

@Component({
  selector: 'app-root',
  template: `
    <products></products>
  `,
  providers: [ProductService]
})
export class AppComponent {}
