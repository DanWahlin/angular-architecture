import { TestBed } from '@angular/core/testing';

import { SharedLibService } from './shared-lib.service';

describe('SharedLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedLibService = TestBed.get(SharedLibService);
    expect(service).toBeTruthy();
  });
});
