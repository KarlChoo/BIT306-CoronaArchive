import { Component, OnInit } from '@angular/core';
import { Centres } from "../../model/centres.model";

const ELEMENT_DATA: Centres[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['centreID', 'centreName'];
  centreDataSource = ELEMENT_DATA;

}
