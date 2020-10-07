import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface patientResult {
  testNo: number;
  centreName: string;
  kitID: string;
  testDate: string;
  result: string;
}

const ELEMENT_DATA: patientResult[] = [
  {testNo: 1, centreName: 'Puchong', kitID: 'K001', testDate: '01/01/2020', result: 'positive'},
  {testNo: 2, centreName: 'Setapak', kitID: 'K001', testDate: '01/01/2020', result: 'positive'},
  {testNo: 3, centreName: 'Setapak', kitID: 'K001', testDate: '01/01/2020', result: 'positive'},
  {testNo: 4, centreName: 'Puchong', kitID: 'K001', testDate: '01/01/2020', result: 'positive'},
  {testNo: 5, centreName: 'Setapak', kitID: 'K001', testDate: '01/01/2020', result: 'positive'},
  {testNo: 6, centreName: 'SS2', kitID: 'K002', testDate: '01/01/2020', result: 'positive'},
  {testNo: 7, centreName: 'Setapak', kitID: 'K002', testDate: '01/01/2020', result: 'positive'},
  {testNo: 8, centreName: 'Puchong', kitID: 'K002', testDate: '01/01/2020', result: 'positive'},
  {testNo: 9, centreName: 'SS2', kitID: 'K002', testDate: '01/01/2020', result: 'positive'},
  {testNo: 10, centreName: 'SS2', kitID: 'K002', testDate: '01/01/2020', result: 'positive'},
];

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['testNo', 'centreName', 'kitID', 'testDate','result'];
  resultDataSource = ELEMENT_DATA;

}
