import { TestBed } from '@angular/core/testing';

import { BureaucraticDependenciesService } from './bureaucratic-dependencies.service';

describe('BureaucraticDependenciesService', () => {
  let service: BureaucraticDependenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BureaucraticDependenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
