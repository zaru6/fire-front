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

  /*
  ngOnInit(): void {
    // Set the headers with the necessary authentication or authorization details
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmRlxb4iLCJpYXQiOjE3MTU4NzI4NTUsImV4cCI6MTcxNTg3NjQ1NX0.UglG2KHVWYkk99Q1KSMWJMdSJqPFZ9F7QAXo4CEpKPk' // Replace with your token or auth details
    });

    // Use the headers in the HTTP request
    this.http.get('http://localhost:8080/api/products', { headers })
     .pipe(
        catchError(error => {
          // Handle the error and return a user-friendly message
          console.error(error);
          return throwError('Error fetching products: ');
        })
      )
     .subscribe(response => {
        console.log(response);
      });
  }
  */

  deleteProduct(productId: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authenticationService.getToken()}`);
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