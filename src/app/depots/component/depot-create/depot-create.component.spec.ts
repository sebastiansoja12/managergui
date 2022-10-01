import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotCreateComponent } from './depot-create.component';

describe('DepotCreateComponent', () => {
  let component: DepotCreateComponent;
  let fixture: ComponentFixture<DepotCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
