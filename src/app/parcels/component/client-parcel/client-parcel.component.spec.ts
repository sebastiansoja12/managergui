import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientParcelComponent } from './client-parcel.component';

describe('ClientParcelComponent', () => {
  let component: ClientParcelComponent;
  let fixture: ComponentFixture<ClientParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientParcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
