// product-form.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ModelService } from '../model.service';
import { Subcategory } from '../subcategory.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() closeButtonClick = new EventEmitter();
  subcategories: Subcategory[] = [];

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    subcategoryId: 0,
    available: false,
    createdBy: 0,
    createdAt: new Date,
    updatedAt: new Date
  };
  productMessage: string = '';

  constructor(
    private productService: ProductService, 
    private modelService: ModelService, 
    private router: Router) { }

  ngOnInit(): void {
    this.modelService.getSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    });
  }

  addProduct(product: Product) {
    if (product.name === '') {
      console.log('Product name is required');
      return;
    }
    this.productService.addProduct(product)
      .subscribe(response => {
        this.productMessage = 'Object insertion successful';
        //this.router.navigate(['/products']);
      }, error => {
        this.productMessage = 'Object insertion failed';
      });
    location.reload(); // Refresh the page

  }

  closeModal() {
    this.closeButtonClick.emit();
  }


}