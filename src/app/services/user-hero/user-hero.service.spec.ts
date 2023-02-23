import { TestBed } from '@angular/core/testing';

import { UserHeroService } from './user-hero.service';

describe('UserHeroService', () => {
  let service: UserHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
