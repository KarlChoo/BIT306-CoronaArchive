import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PatientType } from "../../model/patientType.model";
import { NgForm } from "@angular/forms";
import { Test } from "../../model/Test.model";
import { User } from "../../model/user.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TestsService } from "./tests.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  // arrays
  testList: Test[] = [];
  patientList: User[] = [];
  //subs
  private patientsSub: Subscription;

  constructor(public testService:TestsService) {}

  ngOnInit(): void {
    this.testList = this.testService.getTestList();
    this.testService.getPatients(); //call the service to get all patients
    this.patientsSub = this.testService.getPatientUpdatedListener()
      .subscribe((patients: User[]) => {
        this.patientList = patients;
      });
  }

  //bind with table
  displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','result','update'];
  dataSource = new MatTableDataSource<Test>(this.testService.getTestList());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //method
  //creating new test for new patient
  //register new patient as well
  recordNewTest(formData: NgForm){
      if (formData.invalid){
        return;
      }
      //generate date
      var todayDate = new Date().toLocaleString();
      //generate ID
      var newID = this.testService.generateTestID();
      //create new test
      const newTest: Test = {
        testID: newID,
        testDate: todayDate,
        username: formData.value.username,
        patientType: formData.value.patientType,
        symptom: formData.value.symptom,
        status: "Pending"
      }

      //add the test
      this.testService.addNewTest(newTest);
      //register the user
      this.testService.addNewPatient(formData.value.username,formData.value.password, formData.value.fullname, formData.value.patientType, formData.value.symptom);

      //extra
      //console.log(this.testList);
      formData.resetForm();
      this.refreshTable();
      alert("Test ID:" + newID + " Successfully Added.");
      //alert("Username: " + formData.value.fullname + " Registered Successfully.");
      //console.log(newPatient.symptoms);
  }

  //creating new rest for existing patient
  recordExistForm(formData: NgForm){
    if (formData.invalid){
      return;
    }
    //generate date
    var todayDate = new Date().toLocaleString();
    //generate ID
    var newID = this.testService.generateTestID();
    const newTest: Test = {
      testID: newID,
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
    alert("Test ID:" + newID + " Successfully Added.");
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
