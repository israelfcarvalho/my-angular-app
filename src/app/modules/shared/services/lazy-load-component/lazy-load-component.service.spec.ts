import { TestBed } from '@angular/core/testing';

import { LazyLoadComponentService } from './lazy-load-component.service';

describe('LazyLoadComponentService', () => {
  let service: LazyLoadComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyLoadComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
