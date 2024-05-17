import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];
  productMessage: string = '';

  constructor(private productService: ProductService, private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log("Product deleted successfully");
        location.reload(); // Refresh the page
      },
      (error) => {
        console.error("Error deleting product:", error);
      }
    );
  }

  onUpdateProduct(product: Product) {
    this.router.navigate(['/products', product.id, 'edit']);
  }
}