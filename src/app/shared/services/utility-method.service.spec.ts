import { TestBed } from '@angular/core/testing';

import { UtilityMethodService } from './utility-method.service';

describe('UtilityMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilityMethodService = TestBed.get(UtilityMethodService);
    expect(service).toBeTruthy();
  });
});
