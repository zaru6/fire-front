import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-creator',
  templateUrl: `product-creator.component.html`
})
export class ProductCreatorComponent {
  product = {
    name: '',
    price: 0,
    available: 0
  };

  addProduct(product: any) {
    // Insert the product object into the database here
  }
}