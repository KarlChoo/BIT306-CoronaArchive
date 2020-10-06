import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTestCenterOfficerComponent } from './record-test-center-officer.component';

describe('RecordTestCenterOfficerComponent', () => {
  let component: RecordTestCenterOfficerComponent;
  let fixture: ComponentFixture<RecordTestCenterOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordTestCenterOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTestCenterOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
