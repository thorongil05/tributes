import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycheckFormModalComponent } from './paycheck-form-modal.component';

describe('PaycheckFormModalComponent', () => {
  let component: PaycheckFormModalComponent;
  let fixture: ComponentFixture<PaycheckFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaycheckFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaycheckFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
