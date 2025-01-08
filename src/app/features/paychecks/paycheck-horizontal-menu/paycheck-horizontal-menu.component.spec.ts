import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycheckHorizontalMenuComponent } from './paycheck-horizontal-menu.component';

describe('PaycheckHorizontalMenuComponent', () => {
  let component: PaycheckHorizontalMenuComponent;
  let fixture: ComponentFixture<PaycheckHorizontalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaycheckHorizontalMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaycheckHorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
