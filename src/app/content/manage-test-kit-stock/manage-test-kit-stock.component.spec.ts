import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestKitStockComponent } from './manage-test-kit-stock.component';

describe('ManageTestKitStockComponent', () => {
  let component: ManageTestKitStockComponent;
  let fixture: ComponentFixture<ManageTestKitStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTestKitStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTestKitStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
