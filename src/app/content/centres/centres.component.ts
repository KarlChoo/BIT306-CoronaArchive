import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestCenterService } from "./test-centre.service";

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent implements OnInit, OnDestroy {

  constructor(public testCenterService:TestCenterService) { }

  ngOnInit(): void {
    this.testCenterService.getTestCenterList();
  }

  ngOnDestroy(): void {
  }

  displayedColumns: string[] = ['centreID', 'centreName'];
  centreDataSource = this.testCenterService.getTestCenterList();
}
