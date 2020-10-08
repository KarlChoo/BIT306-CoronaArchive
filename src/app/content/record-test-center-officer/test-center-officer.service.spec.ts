import { TestBed } from '@angular/core/testing';

import { TestCenterOfficerService } from './test-center-officer.service';

describe('TestCenterOfficerService', () => {
  let service: TestCenterOfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCenterOfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
