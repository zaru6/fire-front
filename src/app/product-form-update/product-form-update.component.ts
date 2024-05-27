import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { Subcategory } from '../subcategory.model';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-product-form-update',
  templateUrl: './product-form-update.component.html',
  styleUrl: './product-form-update.component.css'
})
export class ProductFormUpdateComponent {
  @Input()
  product!: Product; // Input property to receive the product
  @Output() closeButtonClick = new EventEmitter();
  update: boolean = true;
  subcategories: Subcategory[] = [];

  productMessage: string = '';

  constructor(
    private modelService: ModelService,
    private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    this.modelService.getSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    });
  }

  updateProduct(product: Product) {
    if (this.update == false) {
      console.log('Product not updated');
      return;
    }
    this.productService.updateProduct(this.product)
    .subscribe(response => {
      this.productMessage = 'Object update successful';
    }, error => {
      this.productMessage = 'Object update failed';
    });;
    location.reload(); // Refresh the page
  }

  closeModal() {
    this.update = false;
    this.closeButtonClick.emit();
  }
}
