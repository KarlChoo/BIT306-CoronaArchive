import { Component, OnInit } from '@angular/core';
import { PatientType } from "../../model/patientType.model";
import { NgForm } from "@angular/forms";
import { Test } from "../../model/Test.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor() {  }
  ngOnInit(): void {
  }

  //drop down list
  patientType: PatientType[] = [
    {value: 'returnee', viewValue: 'Returnee'},
    {value: 'quarantined', viewValue: 'Quarantined'},
    {value: 'close', viewValue: 'Close Contact'},
    {value: 'infected', viewValue: 'Infected'},
    {value: 'suspected', viewValue: 'Suspected'}
  ];

    //sample data of tests
  testList: Test[] = [
      {testID: "T1",testDate: "08/10/2020", username: "Pete", patientType: "returnee", symptom: "Fever", status: "Completed"},
      {testID: "T2",testDate: "08/10/2020", username: "Jackson", patientType: "suspected", symptom: "Fever", status: "Completed"},
      {testID: "T3",testDate: "08/10/2020", username: "Bob", patientType: "close", symptom: "Cough", status: "Completed"},
      {testID: "T4",testDate: "08/10/2020", username: "Anson", patientType: "quarantined", symptom: "Cough", status: "Pending"},
  ];
  //bind with table
  displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','update'];
  dataSource = new MatTableDataSource<Test>(this.testList);

  //method
  recordNewTest(formData: NgForm){
      if (formData.invalid){
        return;
      }

      //generate ID
      var theLetter = "T";
      var theLength = this.testList.length + 1;
      var conv = theLength.toString();
      var theID = theLetter.concat(conv);

      //generate date
      var todayDate = new Date().toLocaleString();

      const newTest: Test = {
        testID: theID,
        testDate: todayDate,
        username: formData.value.username,
        patientType: formData.value.patientType,
        symptom: "Fever",
        status: "Pending"
      }
      this.testList.push(newTest);
      formData.resetForm();
  }
 }
