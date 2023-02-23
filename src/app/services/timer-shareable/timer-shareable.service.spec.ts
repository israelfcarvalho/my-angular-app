import { TestBed } from '@angular/core/testing';

import { TimerShareableService } from './timer-shareable.service';

describe('TimerShareableService', () => {
  let service: TimerShareableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerShareableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
