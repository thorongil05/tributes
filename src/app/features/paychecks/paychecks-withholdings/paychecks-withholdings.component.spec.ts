import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaychecksWithholdingsComponent } from './paychecks-withholdings.component';

describe('PaychecksWithholdingsComponent', () => {
  let component: PaychecksWithholdingsComponent;
  let fixture: ComponentFixture<PaychecksWithholdingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaychecksWithholdingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaychecksWithholdingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
