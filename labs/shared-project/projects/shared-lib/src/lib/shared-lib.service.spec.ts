import { TestBed } from '@angular/core/testing';

import { SharedLibService } from './shared-lib.service';

describe('SharedLibService', () => {
  let service: SharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
