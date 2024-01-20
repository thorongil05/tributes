import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesOverviewComponent } from './shares-overview.component';

describe('SharesOverviewComponent', () => {
  let component: SharesOverviewComponent;
  let fixture: ComponentFixture<SharesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
