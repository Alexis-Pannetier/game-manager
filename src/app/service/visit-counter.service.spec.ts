import { TestBed } from '@angular/core/testing';

import { VisitCounterService } from './visit-counter.service';

describe('VisitCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitCounterService = TestBed.get(VisitCounterService);
    expect(service).toBeTruthy();
  });
});
