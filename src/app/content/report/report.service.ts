import { Injectable } from '@angular/core';
import { Test } from "../../model/Test.model";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  private testList: Test[] = [
    {testID: "T1",testDate: "08/10/2020", username: "Pete", patientType: "returnee", symptom: "Fever", status: "Completed"},
    {testID: "T2",testDate: "08/10/2020", username: "Jackson", patientType: "suspected", symptom: "Fever", status: "Completed"},
    {testID: "T3",testDate: "08/10/2020", username: "Bob", patientType: "close", symptom: "Cough", status: "Completed"},
    {testID: "T4",testDate: "08/10/2020", username: "Anson", patientType: "quarantined", symptom: "Cough", status: "Pending"},
  ];

  private dailyCase:number = 56;
  private monthlyPatients:number = 1289;
  private kitCount:number = 468;

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
}
