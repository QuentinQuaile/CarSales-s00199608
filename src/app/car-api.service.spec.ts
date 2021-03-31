import { TestBed } from '@angular/core/testing';

import { CarApiService } from './car-api.service';

describe('CarApiService', () => {
  let service: CarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarApiService);
  });

  it('should be created', () => {
    const service: CarApiService = TestBed.get(CarApiService);
    expect(service).toBeTruthy();
  });
});
