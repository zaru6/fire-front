import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];
  productMessage: string = '';

  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(productId: number) {
    this.http.delete(`http://localhost:8080/api/products/${productId}`)
    .subscribe(response => {
        this.productMessage = 'Product deletion successful';
        console.log(response);
        // Remove the product from the products array
        this.products = this.products.filter(product => product.id!== productId);
      }, error => {
        this.productMessage = 'Product deletion failed';
        console.error(error);
    });
  }
}