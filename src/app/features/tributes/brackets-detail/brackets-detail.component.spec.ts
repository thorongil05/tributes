import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketsDetailComponent } from './brackets-detail.component';

describe('BracketsDetailComponent', () => {
  let component: BracketsDetailComponent;
  let fixture: ComponentFixture<BracketsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BracketsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
