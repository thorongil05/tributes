import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInfoCardComponent } from './tax-info-card.component';

describe('TaxInfoCardComponent', () => {
  let component: TaxInfoCardComponent;
  let fixture: ComponentFixture<TaxInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
