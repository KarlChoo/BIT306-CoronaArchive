import { Component, OnInit } from '@angular/core';
import { Centre } from "../../model/centre.model";
import { TestCenterService } from "./test-centre.service";

const ELEMENT_DATA: Centre[] = [
  {centreID: 'C0001', centreName: 'Puchong'},
  {centreID: 'C0002', centreName: 'Setapak'},
  {centreID: 'C0003', centreName: 'PJ'},
  {centreID: 'C0004', centreName: 'Cyberjaya'},
  {centreID: 'C0005', centreName: 'Subang'},
  {centreID: 'C0006', centreName: 'Damansara'},
  {centreID: 'C0007', centreName: 'Subang Jaya'},
  {centreID: 'C0008', centreName: 'Sunway'},
  {centreID: 'C0009', centreName: 'Giza'},
  {centreID: 'C0010', centreName: 'Bukit Targa'},
];

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
