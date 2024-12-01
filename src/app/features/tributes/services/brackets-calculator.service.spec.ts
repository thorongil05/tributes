import { TestBed } from '@angular/core/testing';

import BracketsCalculatorService from './brackets-calculator.service';

describe('BracketsCalculatorService', () => {
  let service: BracketsCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BracketsCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
