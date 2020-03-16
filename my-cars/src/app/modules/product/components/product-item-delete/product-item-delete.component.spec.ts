import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDeleteComponent } from './product-item-delete.component';

describe('ProductItemDeleteComponent', () => {
  let component: ProductItemDeleteComponent;
  let fixture: ComponentFixture<ProductItemDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
