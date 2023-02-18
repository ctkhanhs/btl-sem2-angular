import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentCreateComponent } from './consignment-create.component';

describe('ConsignmentCreateComponent', () => {
  let component: ConsignmentCreateComponent;
  let fixture: ComponentFixture<ConsignmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
