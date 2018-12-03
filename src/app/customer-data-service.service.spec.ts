import { TestBed, inject } from '@angular/core/testing';

import { CustomerDataServiceService } from './customer-data-service.service';

describe('CustomerDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDataServiceService]
    });
  });

  it('should be created', inject([CustomerDataServiceService], (service: CustomerDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
