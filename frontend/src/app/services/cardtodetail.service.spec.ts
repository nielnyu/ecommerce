import { TestBed } from '@angular/core/testing';

import { CardtodetailService } from './cardtodetail.service';

describe('CardtodetailService', () => {
  let service: CardtodetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardtodetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
