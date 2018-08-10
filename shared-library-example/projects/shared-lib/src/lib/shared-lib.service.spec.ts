import { TestBed, inject } from '@angular/core/testing';

import { SharedLibService } from './shared-lib.service';

describe('SharedLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedLibService]
    });
  });

  it('should be created', inject([SharedLibService], (service: SharedLibService) => {
    expect(service).toBeTruthy();
  }));
});
