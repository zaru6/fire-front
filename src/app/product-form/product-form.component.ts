// product-form.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() closeButtonClick = new EventEmitter();

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    subcategoryId: 0,
    available: false
  };
  productMessage: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(product: Product) {
    this.productService.addProduct(product)
      .subscribe(response => {
        this.productMessage = 'Object insertion successful';
        //this.router.navigate(['/products']);
      }, error => {
        this.productMessage = 'Object insertion failed';
      });
  }

  closeModal() {
    this.closeButtonClick.emit();
  }


}