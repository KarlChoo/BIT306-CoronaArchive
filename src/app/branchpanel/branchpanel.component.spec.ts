import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchpanelComponent } from './branchpanel.component';

describe('BranchpanelComponent', () => {
  let component: BranchpanelComponent;
  let fixture: ComponentFixture<BranchpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
