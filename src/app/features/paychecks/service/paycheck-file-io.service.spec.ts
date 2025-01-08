import { TestBed } from '@angular/core/testing';

import { PaycheckFileIoService } from './paycheck-file-io.service';

describe('PaycheckFileIoService', () => {
  let service: PaycheckFileIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaycheckFileIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
