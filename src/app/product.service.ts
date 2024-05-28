import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { ProductDTO } from './productdto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/products';
  private dtoApiUrl = 'http://localhost:8080/api/products/table';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<Product[]>(this.apiUrl, httpOptions);
  }

  getProduct(id: number): Observable<Product> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<Product>(`${this.apiUrl}/${id}`, httpOptions);
  }

  getProductDtos(): Observable<ProductDTO[]> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<ProductDTO[]>(this.dtoApiUrl, httpOptions);
  }

  addProduct(product: Product) {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.post(this.apiUrl, product, httpOptions);
  }

  updateProduct(product: Product) {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.put(`${this.apiUrl}/${product.id}`, product, httpOptions);
  }

  deleteProduct(id: number) {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
}