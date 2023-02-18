import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsignmentComponent } from './new-consignment.component';

describe('NewConsignmentComponent', () => {
  let component: NewConsignmentComponent;
  let fixture: ComponentFixture<NewConsignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
