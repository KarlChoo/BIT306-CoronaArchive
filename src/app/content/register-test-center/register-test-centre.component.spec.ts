import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTestCentreComponent } from './register-test-centre.component';

describe('RegisterTestCenterComponent', () => {
  let component: RegisterTestCentreComponent;
  let fixture: ComponentFixture<RegisterTestCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTestCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTestCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
