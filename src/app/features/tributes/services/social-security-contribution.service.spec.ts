import { TestBed } from '@angular/core/testing';

import { SocialSecurityContributionService } from './social-security-contribution.service';

describe('SocialSecurityContributionService', () => {
  let service: SocialSecurityContributionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialSecurityContributionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
