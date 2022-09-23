import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerouteGetComponent } from './reroute-get.component';

describe('RerouteGetComponent', () => {
  let component: RerouteGetComponent;
  let fixture: ComponentFixture<RerouteGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerouteGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RerouteGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
