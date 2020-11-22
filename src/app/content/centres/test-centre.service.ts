import { Injectable } from '@angular/core';
import { Centre } from "../../model/centre.model";

import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestCenterService {

  /*
  private testCenterList: Centre[] = [
    {centreID: 'C0001', centreName: 'Puchong'},
    {centreID: 'C0002', centreName: 'Setapak'},
    {centreID: 'C0003', centreName: 'PJ'},
    {centreID: 'C0004', centreName: 'Cyberjaya'},
    {centreID: 'C0005', centreName: 'Subang'},
    {centreID: 'C0006', centreName: 'Damansara'},
    {centreID: 'C0007', centreName: 'Subang Jaya'},
    {centreID: 'C0008', centreName: 'Sunway'},
    {centreID: 'C0009', centreName: 'Giza'},
    {centreID: 'C0010', centreName: 'Bukit Targa'},
  ]
  */
  private testCentreList: Centre[] = [];
  private testCentreListUpdated = new Subject<Centre[]>();

  constructor(private http: HttpClient) { }

  getTestCentreList(){
      //return this.testCenterList;
      this.http.get<{message: string, testCentres: any}>("http://localhost:3000/api/testcentre")
        .pipe(map(centreData => {
          return centreData.testCentres.map(testCentre => {
            return {
              centreID: testCentre._id,
              centreName: testCentre.centreName,
            }
          })
        }))

        .subscribe((updatedCentreData) => {
          this.testCentreList = updatedCentreData;
          this.testCentreListUpdated.next([...this.testCentreList]);
       })
  }

  getTestCentreListLocal(){
      return this.testCentreList;
  }

  getCentreUpdatedListener(){
    return this.testCentreListUpdated.asObservable();
  }

  /*
  generateTestCenterID(){
    let nextID = this.testCentreList.length + 1;
    let zeroPad = "";
    if(nextID.toString().length < 4){
      zeroPad = "0000";
      zeroPad = zeroPad.slice(0,4 - nextID.toString().length);
    }
    return "C" + zeroPad + nextID;
  }*/

  addNewTestCenter(centreName: string){
      //this.testCentreList.push(newTestCenter);
      //const testCentre: Centre = {centreID: null,centreName: newTestCenter.centreName};
      //this.testCentreList.push(newTestCenter);
      //this.testCentreListUpdated.next([...this.testCentreList]);
      const newTestCentre: Centre = {
        centreID:  null,
        centreName: centreName,
      }

      console.log(newTestCentre);


      this.http.post("http://localhost:3000/api/testcentre",newTestCentre)
        .subscribe(responseData => {
            console.log(responseData);
      })
  }
}
