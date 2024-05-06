import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-creator',
  templateUrl: './product-creator.component.html'
})
export class ProductCreatorComponent {
  product = {
    name: '',
    price: 0,
    available: false // Initialize available as a boolean
  };
  productMessage: string = '';

  constructor(private http: HttpClient) { }

  addProduct(product: any) {
    this.http.post('http://localhost:8080/api/products', product)
      .subscribe(response => {
        this.productMessage = 'Object insertion successful';
        console.log(response);
        // You can also navigate to a different route or display a success message here
      }, error => {
        this.productMessage = 'Object insertion failed';
        console.error(error);
        // You can also display an error message here
      });
  }
}