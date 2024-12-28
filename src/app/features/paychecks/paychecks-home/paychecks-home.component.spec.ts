import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaychecksHomeComponent } from './paychecks-home.component';

describe('PaychecksHomeComponent', () => {
  let component: PaychecksHomeComponent;
  let fixture: ComponentFixture<PaychecksHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaychecksHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaychecksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
