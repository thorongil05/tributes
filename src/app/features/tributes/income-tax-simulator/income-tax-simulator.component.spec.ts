import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxSimulatorComponent } from './income-tax-simulator.component';

describe('IncomeTaxSimulatorComponent', () => {
  let component: IncomeTaxSimulatorComponent;
  let fixture: ComponentFixture<IncomeTaxSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeTaxSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeTaxSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
