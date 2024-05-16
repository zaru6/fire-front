import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmRlxb4iLCJpYXQiOjE3MTU4NzI4NTUsImV4cCI6MTcxNTg3NjQ1NX0.UglG2KHVWYkk99Q1KSMWJMdSJqPFZ9F7QAXo4CEpKPk' 
      })
    };
    return this.http.get<Product[]>(this.apiUrl, httpOptions);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(product: Product) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}