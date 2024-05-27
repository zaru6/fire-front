import { Component } from '@angular/core';
import { ProductDTO } from '../productdto.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productdtos',
  templateUrl: './productdtos.component.html',
  styleUrl: './productdtos.component.css'
})
export class ProductdtosComponent {
  products: ProductDTO[] = [];
  productMessage: string = '';

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProductDtos();
  }

  getProductDtos() {
    this.productService.getProductDtos().subscribe(products => {
      this.products = products;
    });
  }

}
