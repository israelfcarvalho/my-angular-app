import { TestBed } from '@angular/core/testing';

import { MyFirstModuleService } from './my-first-module.service';

describe('MyFirstModuleService', () => {
  let service: MyFirstModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
