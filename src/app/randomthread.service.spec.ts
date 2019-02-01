import { TestBed } from '@angular/core/testing';

import { RandomthreadService } from './randomthread.service';

describe('RandomthreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomthreadService = TestBed.get(RandomthreadService);
    expect(service).toBeTruthy();
  });
});
