import { TestBed } from '@angular/core/testing';

import { TestCentreOfficerService } from './test-centre-officer.service';

describe('TestCenterOfficerService', () => {
  let service: TestCentreOfficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCentreOfficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
