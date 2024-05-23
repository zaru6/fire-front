import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ProductFormComponent } from '../product-form/product-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];
  productMessage: string = '';

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log("Product deleted successfully");
        this.getProducts();
      },
      (error) => {
        console.error("Error deleting product:", error);
      }
    );
  }

  onUpdateProduct(product: Product) {
    this.router.navigate(['/products', product.id, 'edit']);
  }

  openProductForm(): void {
    const modalRef = this.modalService.open(ProductFormComponent);
    modalRef.componentInstance.closeButtonClick.subscribe(() => {
      modalRef.close();
    });
    modalRef.result.then(
      result => {
        console.log('Closed with:', result);
      },
      reason => {
        console.log('Dismissed', reason);
      }
    );
  }

  openUploadForm(): void {
    const modalRef = this.modalService.open(UploadComponent);
    modalRef.componentInstance.closeButtonClick.subscribe(() => {
      modalRef.close();
    });
    modalRef.result.then(
      result => {
        console.log('Closed with:', result);
      },
      reason => {
        console.log('Dismissed', reason);
      }
    );
  }
}