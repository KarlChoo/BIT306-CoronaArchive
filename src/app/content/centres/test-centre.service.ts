import { Injectable } from '@angular/core';
import { Centre } from "../../model/centre.model";

@Injectable({
  providedIn: 'root'
})
export class TestCenterService {

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

  constructor() { }

  getTestCenterList(){
      return this.testCenterList;
  }

  generateTestCenterID(){
    let nextID = this.testCenterList.length + 1;
    let zeroPad = "";
    if(nextID.toString().length < 4){
      zeroPad = "0000";
      zeroPad = zeroPad.slice(0,4 - nextID.toString().length);
    }
    return "C" + zeroPad + nextID;
  }

  addNewTestCenter(newTestCenter: Centre){
      this.testCenterList.push(newTestCenter);
  }
}
