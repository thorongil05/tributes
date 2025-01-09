import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCompensationsFormSectionComponent } from './other-compensations-form-section.component';

describe('OtherCompensationsFormSectionComponent', () => {
  let component: OtherCompensationsFormSectionComponent;
  let fixture: ComponentFixture<OtherCompensationsFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherCompensationsFormSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCompensationsFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
