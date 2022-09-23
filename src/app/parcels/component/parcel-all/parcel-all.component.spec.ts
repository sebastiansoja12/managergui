import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelAllComponent } from './parcel-all.component';

describe('ParcelAllComponent', () => {
  let component: ParcelAllComponent;
  let fixture: ComponentFixture<ParcelAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
