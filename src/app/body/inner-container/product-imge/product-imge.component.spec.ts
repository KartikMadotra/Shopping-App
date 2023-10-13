import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImgeComponent } from './product-imge.component';

describe('ProductImgeComponent', () => {
  let component: ProductImgeComponent;
  let fixture: ComponentFixture<ProductImgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImgeComponent]
    });
    fixture = TestBed.createComponent(ProductImgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
