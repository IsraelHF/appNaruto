import { TestBed } from '@angular/core/testing';

import { NarutodbService } from './narutodb.service';

describe('NarutodbService', () => {
  let service: NarutodbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarutodbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
