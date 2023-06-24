import { TestBed } from '@angular/core/testing';

import { EcommerceIsaacService } from './ecommerce-isaac.service';

describe('EcommerceIsaacService', () => {
  let service: EcommerceIsaacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceIsaacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
