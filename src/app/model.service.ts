import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Subcategory } from './subcategory.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private categoryApiUrl = 'http://localhost:8080/api/categories';
  private subcategoryApiUrl = 'http://localhost:8080/api/subcategories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<Category[]>(this.categoryApiUrl, httpOptions);
  }

  getSubcategories(): Observable<Subcategory[]> {
    const token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token // Add the token here
      })
    };
    return this.http.get<Subcategory[]>(this.subcategoryApiUrl, httpOptions);
  }

}
