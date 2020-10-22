import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTestCentreOfficerComponent } from './record-test-centre-officer.component';

describe('RecordTestCenterOfficerComponent', () => {
  let component: RecordTestCentreOfficerComponent;
  let fixture: ComponentFixture<RecordTestCentreOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordTestCentreOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTestCentreOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
