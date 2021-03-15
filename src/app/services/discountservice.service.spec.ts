import { TestBed } from '@angular/core/testing';

import { DiscountserviceService } from './discountservice.service';

describe('DiscountserviceService', () => {
  let service: DiscountserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
