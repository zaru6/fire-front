import { Component } from '@angular/core';
import { ProductDTO } from '../productdto.model';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from '../upload/upload.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductFormUpdateComponent } from '../product-form-update/product-form-update.component';
import { Product } from '../product.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-productdtos',
  templateUrl: './productdtos.component.html',
  styleUrl: './productdtos.component.css'
})
export class ProductdtosComponent {
  products: ProductDTO[] = [];
  productForUpdate!: Product;
  productMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
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

  onUpdateProduct(productDTO: ProductDTO) {
    this.productService.getProduct(productDTO.id).subscribe({
      next: (response: Product) => {
        const product = response;
        console.log('Fetched Product:', product);
  
        // Open the modal after fetching the product
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
      },
      error: (error) => {
        console.error('Error fetching product', error);
      }
    });
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

  async getProduct(id: number): Promise<Product> {
    return lastValueFrom(this.productService.getProduct(id));
  }

}
