import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {
  productMessage: string = '';
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    available: false
  };
  productId!: number;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.product.id = +this.route.snapshot.paramMap.get('id')!;
    // Use the product ID to fetch the product data from your API or database
  }

  updateProduct() {
    this.productService.updateProduct(this.product)
    .subscribe(response => {
      this.productMessage = 'Object update successful';
    }, error => {
      this.productMessage = 'Object update failed';
    });;
  }
}
