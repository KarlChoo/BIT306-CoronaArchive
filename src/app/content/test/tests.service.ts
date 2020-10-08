import { Injectable } from '@angular/core';
import { Test } from 'src/app/model/Test.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor() { }
  private testLists: Test[] = [
    {testID: "T1", testDate: "10/8/2020, 11:58:04 PM", username: "Dylan", patientType: "returnee", symptom: "Fever, Cough Blood", status: "Pending"},
    {testID: "T2", testDate: "10/8/2020, 11:59:04 PM", username: "Bob", patientType: "suspected", symptom: "Cough Blood", status: "Pending"},
    {testID: "T3", testDate: "10/8/2020, 11:59:50 PM", username: "Karen", patientType: "suspected", symptom: "Fever, Chills", status: "Pending"}
  ];

  getTestList(){
    return this.testLists;
  }

  addNewTest(newTest: Test){
    this.testLists.push(newTest)
  }
}
