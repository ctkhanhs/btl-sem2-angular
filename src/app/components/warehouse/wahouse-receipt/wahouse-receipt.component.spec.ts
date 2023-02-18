import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WahouseReceiptComponent } from './wahouse-receipt.component';

describe('WahouseReceiptComponent', () => {
  let component: WahouseReceiptComponent;
  let fixture: ComponentFixture<WahouseReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WahouseReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WahouseReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
