import { TestBed } from '@angular/core/testing';

import { ProductGuardService } from './product-guard.service';

describe('ProductGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductGuardService = TestBed.get(ProductGuardService);
    expect(service).toBeTruthy();
  });
});
