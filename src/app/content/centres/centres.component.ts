import { Component, OnInit } from '@angular/core';
import { Centre } from "../../model/centre.model";
import { TestCenterService } from "./test-centre.service";

const ELEMENT_DATA: Centre[] = [];

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent implements OnInit {

  constructor(public testCenterService:TestCenterService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['centreID', 'centreName'];
  //centreDataSource = ELEMENT_DATA;
  centreDataSource = this.testCenterService.getTestCenterList();
}
