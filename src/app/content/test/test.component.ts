import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PatientType } from "../../model/patientType.model";
import { NgForm } from "@angular/forms";
import { Test } from "../../model/Test.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TestsService } from "./tests.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  //tests array
  testList: Test[] = [];

  constructor(public testService:TestsService) { }
  ngOnInit(): void {
    this.testList = this.testService.getTestList();
  }

  //bind with table
  displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','result','update'];
  dataSource = new MatTableDataSource<Test>(this.testService.getTestList());

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
        symptom: formData.value.symptom,
        status: "Pending"
      }
      this.testService.addNewTest(newTest);
      console.log(this.testList);
      formData.resetForm();
      this.refreshTable();
      alert("Test ID:" + theID + " Successfully Added.");
  }

  recordExistForm(formData: NgForm){
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
      symptom: formData.value.symptom,
      status: "Pending"
    }
    this.testService.addNewTest(newTest);
    console.log(this.testList);
    formData.resetForm();
    this.refreshTable();
    alert("Test ID:" + theID + " Successfully Added.");
  }
    //drop down lists
    patientType: PatientType[] = [
      {value: 'returnee', viewValue: 'Returnee'},
      {value: 'quarantined', viewValue: 'Quarantined'},
      {value: 'closecontact', viewValue: 'Close Contact'},
      {value: 'infected', viewValue: 'Infected'},
      {value: 'suspected', viewValue: 'Suspected'}
    ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  refreshTable(){
    this.dataSource.paginator = this.paginator;
  }

  displayUpdate(testID){
    //generate date
     var todayDate = new Date().toLocaleString();
    //console.log(testID);
    alert("Test " + testID  + " update Completed at \n" + todayDate + ".");
  }
 }
