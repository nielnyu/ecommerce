import { TestBed } from '@angular/core/testing';

import { NumberProductsService } from './number-products.service';

describe('NumberProductsService', () => {
  let service: NumberProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
