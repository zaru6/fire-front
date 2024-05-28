import { Component } from '@angular/core';
import { ProductDTO } from '../productdto.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from '../upload/upload.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductFormUpdateComponent } from '../product-form-update/product-form-update.component';
import { Product } from '../product.model';

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

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log("Product deleted successfully");
        this.getProductDtos();
      },
      (error) => {
        console.error("Error deleting product:", error);
      }
    );
  }

  onUpdateProduct(product: ProductDTO) {
    const modalRef = this.modalService.open(ProductFormUpdateComponent);
    modalRef.componentInstance.product = product; 
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
