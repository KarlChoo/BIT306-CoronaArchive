import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Test } from "../../model/Test.model";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  private testList: Test[] = [];

  private dailyCase:number = 56;
  private monthlyPatients:number = 1289;
  private kitCount:number = 468;

  private updatedTests = new Subject<Test[]>();

  getAllTests(){
    return this.testList;
  }

  getDailyCase(){
    return this.dailyCase;
  }

  getMonthlyPatients(){
    return this.monthlyPatients;
  }

  getKitCount(){
    return this.kitCount;
  }

  getUpdatedTestsListener(){
    return this.updatedTests.asObservable();
  }

  getAllCentreTest(centreId: string){
      this.http.get<{message: string, tests: any}>("http://localhost:3000/api/allCentreTests/" + centreId)
        .pipe(map(testsData => {
          return testsData.tests.map(testData => {
            return {
              testId: testData._id,
              testDate: testData.testDate,
              username: testData.username,
              patientType: testData.patientType,
              symptom: testData.symptom,
              status: testData.status,
              result: testData.result,
              resultDate: testData.resultDate,
              testerID: testData.testerID
            }
          })
        }))
        .subscribe(responseData => {
          console.log(responseData);
          this.testList = responseData;
          this.updatedTests.next(this.testList);
      })
  }
}
