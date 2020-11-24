import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getAllCentreTest(centreId: string){
      //Get all testers first
      /*
      this.http.get<{message:string, testers: any}>("http://localhost:3000/api/testers/" + centreId)
      .pipe(map(testerData => {
        return testerData.testers.map(tester => {
          return {
            userId: tester._id,
            username: tester.username,
            password: tester.password,
            name: tester.name,
            position: tester.position
          }
        })
      }))
      .subscribe(testerList =>{
          const testers = testerList
          this.http.get<{message: string, centreTests: any}>("http://localhost:3000/api/allCentreTests", testers)
            .subscribe(responseData => {
                console.log(responseData);
            })
      })
      */
      this.http.get<{message: string, centreTests: any}>("http://localhost:3000/api/allCentreTests/" + centreId)
        .subscribe(responseData => {
          console.log(responseData);
      })
  }
}
