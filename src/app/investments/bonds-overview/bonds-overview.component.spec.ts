import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondsOverviewComponent } from './bonds-overview.component';

describe('BondsOverviewComponent', () => {
  let component: BondsOverviewComponent;
  let fixture: ComponentFixture<BondsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
