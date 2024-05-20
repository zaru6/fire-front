import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html'
})
export class ProductCreatorComponent {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    subcategoryId: 0,
    available: false
  };
  productMessage: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  addProduct() {
    this.productService.addProduct(this.product)
     .subscribe(response => {
        this.productMessage = 'Object insertion successful';
        this.router.navigate(['/products']);
      }, error => {
        this.productMessage = 'Object insertion failed';
      });
  }

}