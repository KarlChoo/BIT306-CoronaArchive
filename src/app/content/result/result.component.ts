import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientResult } from "../../model/result.model";

const ELEMENT_DATA: PatientResult[] = [
  {testNo: 1, testID: 't0001', centreName: 'Puchong',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 2, testID: 't0002', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 3, testID: 't0003', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 4, testID: 't0004', centreName: 'Puchong',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 5, testID: 't0005', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 6, testID: 't0006', centreName: 'SS2',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 7, testID: 't0007', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 8, testID: 't0008', centreName: 'Puchong',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 9, testID: 't0009', centreName: 'SS2',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 10, testID: 't0010', centreName: 'SS2',  testDate: '01/01/2020', status: 'pending', result: 'N/A'},
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

  displayedColumns: string[] = ['testNo', 'testID', 'centreName', 'testDate','status', 'result'];
  resultDataSource = ELEMENT_DATA;

}
