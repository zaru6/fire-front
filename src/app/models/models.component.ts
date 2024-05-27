import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Category } from '../category.model';
import { ModelService } from '../model.service';
import { Subcategory } from '../subcategory.model';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {
  products: Product[] = [];
  categories: Category[] = [];
  subcategories: Subcategory[] = [];

  constructor(
    private productService: ProductService, 
    private modelService: ModelService, 
    private http: HttpClient, 
    private router: Router, 
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.modelService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.modelService.getSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
    });
  }
}
