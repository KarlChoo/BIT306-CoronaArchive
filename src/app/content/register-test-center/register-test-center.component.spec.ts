import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTestCenterComponent } from './register-test-center.component';

describe('RegisterTestCenterComponent', () => {
  let component: RegisterTestCenterComponent;
  let fixture: ComponentFixture<RegisterTestCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTestCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
