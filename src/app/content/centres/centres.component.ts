import { Component, OnInit } from '@angular/core';

export interface centres {
  centreID: string;
  centreName: string;
  opTime: string;
}

const ELEMENT_DATA: centres[] = [
  {centreID: 'C0001', centreName: 'Puchong', opTime: '0900-1800'},
  {centreID: 'C0002', centreName: 'Setapak', opTime: '0900-1800'},
  {centreID: 'C0003', centreName: 'PJ', opTime: '0900-1800'},
  {centreID: 'C0004', centreName: 'Cyberjaya', opTime: '0900-1800'},
  {centreID: 'C0005', centreName: 'Subang', opTime: '0900-1800'},
  {centreID: 'C0006', centreName: 'Damansara', opTime: '0900-1800'},
  {centreID: 'C0007', centreName: 'Subang Jaya', opTime: '0900-1800'},
  {centreID: 'C0008', centreName: 'Sunway', opTime: '0900-1800'},
  {centreID: 'C0009', centreName: 'Giza', opTime: '0900-1800'},
  {centreID: 'C0010', centreName: 'Bukit Targa', opTime: '0900-1800'},
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

  displayedColumns: string[] = ['centreID', 'centreName', 'opTime'];
  centreDataSource = ELEMENT_DATA;

}
