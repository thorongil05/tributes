import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondForecasterComponent } from './bond-forecaster.component';

describe('BondForecasterComponent', () => {
  let component: BondForecasterComponent;
  let fixture: ComponentFixture<BondForecasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondForecasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondForecasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
