import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html'
})
export class ProductCreatorComponent {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    available: false
  };
  productMessage: string = '';

  constructor(private productService: ProductService) { }

  addProduct() {
    this.productService.addProduct(this.product)
     .subscribe(response => {
        this.productMessage = 'Object insertion successful';
      }, error => {
        this.productMessage = 'Object insertion failed';
      });
  }

}