import { Injectable } from '@angular/core';
import { Test } from "../../model/Test.model";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  private testList: Test[] = [];

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
