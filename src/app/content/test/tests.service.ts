import { Injectable } from '@angular/core';
import { Test } from 'src/app/model/Test.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor() { }
  private testLists: Test[] = [
    {testID: "T1", testDate: "10/8/2020, 11:58:04 PM", username: "Bob", patientType: "returnee", symptom: "Fever, Cough Blood", status: "Completed", result: "Negative", resultDate: "10/9/2020, 11:49:37 AM"},
    {testID: "T2", testDate: "10/8/2020, 11:59:04 PM", username: "Bob", patientType: "suspected", symptom: "Cough Blood", status: "Completed", result: "Negative", resultDate: "11/9/2020, 11:49:37 AM"},
    {testID: "T3", testDate: "10/8/2020, 11:59:50 PM", username: "Bob", patientType: "infected", symptom: "Fever, Chills", status: "Completed", result: "Positive", resultDate: "12/9/2020, 11:49:37 AM"}
  ];

  getTestList(){
    return this.testLists;
  }

  addNewTest(newTest: Test){
    this.testLists.push(newTest)
  }
}
