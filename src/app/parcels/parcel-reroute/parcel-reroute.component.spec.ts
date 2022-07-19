import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelRerouteComponent } from './parcel-reroute.component';

describe('ParcelRerouteComponent', () => {
  let component: ParcelRerouteComponent;
  let fixture: ComponentFixture<ParcelRerouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelRerouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelRerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
