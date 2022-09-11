import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerouteCreateComponent } from './reroute-create.component';

describe('RerouteCreateComponent', () => {
  let component: RerouteCreateComponent;
  let fixture: ComponentFixture<RerouteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RerouteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RerouteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
