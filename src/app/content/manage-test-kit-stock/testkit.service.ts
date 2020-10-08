import { Injectable } from '@angular/core';
import { TestKit } from "../../model/testkit.model";

@Injectable({
  providedIn: 'root'
})
export class TestKitService {
  private testKitList: TestKit[] = [
    {kitID: "TK0001", kitName: "Nose testing kit", stock: 456},
    {kitID: "TK0002", kitName: "Blood testing kit", stock: 114},
    {kitID: "TK0003", kitName: "Temperature testing kit", stock: 69},
    {kitID: "TK0004", kitName: "Ear testing kit", stock: 322},
  ]

  getTestKits(){
    return this.testKitList;
  }

  addNewTestKits(newTestKit: TestKit){
    this.testKitList.push(newTestKit);
  }

  generateKitID(): string{
    let nextID = this.testKitList.length + 1;
    let zeroPad = "";
    if(nextID.toString().length < 4){
      zeroPad = "0000";
      zeroPad = zeroPad.slice(0,4 - nextID.toString().length);
    }
    return "TK" + zeroPad + nextID;
  }

}
