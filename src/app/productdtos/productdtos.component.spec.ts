import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdtosComponent } from './productdtos.component';

describe('ProductdtosComponent', () => {
  let component: ProductdtosComponent;
  let fixture: ComponentFixture<ProductdtosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductdtosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductdtosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
