import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientResult } from "../../model/result.model";

const ELEMENT_DATA: PatientResult[] = [
  {testNo: 1, testID: 'T1', centreName: 'Puchong',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 2, testID: 'T2', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 3, testID: 'T3', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 4, testID: 'T4', centreName: 'Puchong',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 5, testID: 'T5', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 6, testID: 'T6', centreName: 'SS2',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 7, testID: 'T7', centreName: 'Setapak',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 8, testID: 'T8', centreName: 'Puchong',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 9, testID: 'T9', centreName: 'SS2',  testDate: '01/01/2020', status: 'completed', result: 'negative'},
  {testNo: 10, testID: 'T10', centreName: 'SS2',  testDate: '01/01/2020', status: 'pending', result: 'N/A'},
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
