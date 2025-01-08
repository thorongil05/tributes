import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePaycheckHorizontalMenuComponent } from './single-paycheck-horizontal-menu.component';

describe('SinglePaycheckHorizontalMenuComponent', () => {
  let component: SinglePaycheckHorizontalMenuComponent;
  let fixture: ComponentFixture<SinglePaycheckHorizontalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePaycheckHorizontalMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePaycheckHorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
