import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PatientType } from "../../model/patientType.model";
import { NgForm } from "@angular/forms";
import { Test } from "../../model/Test.model";
import { User } from "../../model/user.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TestsService } from "./tests.service";
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  selectedRes: string;
  // arrays
  pTestList: Test[] = [];
  patientList: User[] = [];
  //automcomplete options
  patientOptions: User[];
  //subs
  private patientsSub: Subscription;
  private testsSub: Subscription;

   //bind with pending tests table
   displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','result','update'];
   dataSource = new MatTableDataSource<Test[]>();

  constructor(public testService:TestsService, public authService: AuthService) {}

  ngOnInit(): void {
    //call the service to get all patients
    this.testService.getPatients();
    this.patientsSub = this.testService.getPatientUpdatedListener()
      .subscribe((patients: User[]) => {
        this.patientList = patients;
        this.filterPatient(this.patientList);
      });

    //pending transactions
    this.testService.getPendingTests();
    this.testsSub = this.testService.getPendingTestUpdatedListener()
      .subscribe((pTests: Test[]) => {
        this.pTestList = pTests;
        this.dataSource = pTests;
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
      });

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //register and add test for the new patient
  recordNewTest(formData: NgForm){
      if (formData.invalid){
        return;
      }
      //generate date
      var todayDate = new Date().toLocaleString();
      var theTester = this.authService.getUser();
      //console.log(theTester._id);

      //add the test
      this.testService.addNewTest(todayDate, formData.value.username, formData.value.patientType, formData.value.symptom, theTester._id);
      //register the user
      this.testService.addNewPatient(formData.value.username,formData.value.password, formData.value.fullname, formData.value.patientType, formData.value.symptom);

      formData.resetForm();
      this.refreshTable();
      alert("Test created Successfully.");
      //alert("Username: " + formData.value.fullname + " Registered Successfully.");
  }

  //creating new rest for existing patient
  recordExistForm(formData: NgForm){
    if (formData.invalid){
      return;
    }
    let exist = false;
    //check if its valid username
    var i;
    for (i = 0; i < this.patientOptions.length; i++) {
      if(this.patientOptions[i].username == formData.value.username){
        exist = true;
      }
    }
    if(exist == false){
      alert("Sorry, User Does Not Exist. Please Try Again.");
      return;

    }else{
     //generate date
     var todayDate = new Date().toLocaleString();
     var theTester = this.authService.getUser();

     //add the test
     this.testService.addNewTest(todayDate, formData.value.username, formData.value.patientType, formData.value.symptom, theTester._id);
     formData.resetForm();
     this.refreshTable();
     alert("Test created Successfully.");
    }
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

  //filter
  filterPatient(thePatients){
    //console.log(this.patientList);
    const result = thePatients.filter(patientsOnly => patientsOnly.patientType != undefined);
    this.patientOptions = result;
  }

  //update test
  updateTest(test: Test){
    let posNeg = document.getElementById(test.testId).querySelectorAll("input")[0];
    let updatedRes = String(posNeg.value);
    //console.log(test.testId);
    var todayDate = new Date().toLocaleString();
    this.testService.updateTestResult(test, updatedRes, todayDate);
    //alert("Test " + test.testId  + " update Completed at \n" + todayDate + ".");
  }
 }
