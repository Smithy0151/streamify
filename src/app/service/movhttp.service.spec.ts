import { TestBed } from '@angular/core/testing';

import { MovhttpService } from './movhttp.service';

describe('MovhttpService', () => {
  let service: MovhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
