import { Component, OnInit } from '@angular/core';
import { PatientType } from "../../model/patientType.model";
import { NgForm } from "@angular/forms";
import { Test } from "../../model/Test.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myDate = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

  patientType: PatientType[] = [
    {value: 'returnee', viewValue: 'Returnee'},
    {value: 'quarantined', viewValue: 'Quarantined'},
    {value: 'close', viewValue: 'Close Contact'},
    {value: 'infected', viewValue: 'Infected'},
    {value: 'suspected', viewValue: 'Suspected'}
  ];

  testList: Test[] = [
      {testID: "T0001",testDate: "08/10/2020", username: "Pete", patientType: "returnee", symptom: "Fever", status: "Completed"},
      {testID: "T0002",testDate: "08/10/2020", username: "Jackson", patientType: "suspected", symptom: "Fever", status: "Completed"},
      {testID: "T0003",testDate: "08/10/2020", username: "Bob", patientType: "close", symptom: "Cough", status: "Completed"},
      {testID: "T0004",testDate: "08/10/2020", username: "Anson", patientType: "quarantined", symptom: "Cough", status: "Pending"},
  ];

  displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','update'];
  dataSource = new MatTableDataSource<Test>(this.testList);


 }
