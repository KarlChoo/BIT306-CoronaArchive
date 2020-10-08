import { TestBed } from '@angular/core/testing';

import { TestKitService } from './testkit.service';

describe('TestkitService', () => {
  let service: TestKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
