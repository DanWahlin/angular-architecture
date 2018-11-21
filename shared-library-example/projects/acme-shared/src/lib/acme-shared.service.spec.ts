import { TestBed } from '@angular/core/testing';

import { AcmeSharedService } from './acme-shared.service';

describe('AcmeSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcmeSharedService = TestBed.get(AcmeSharedService);
    expect(service).toBeTruthy();
  });
});
