import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAllComponent } from './supplier-all.component';

describe('SupplierAllComponent', () => {
  let component: SupplierAllComponent;
  let fixture: ComponentFixture<SupplierAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
