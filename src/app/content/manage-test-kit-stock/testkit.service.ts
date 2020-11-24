import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestKit } from "../../model/testkit.model";

@Injectable({
  providedIn: 'root'
})
export class TestKitService {

  private testKitList: TestKit[] = []
  private updatedTestKits = new Subject<TestKit[]>();

  constructor(private http: HttpClient) {}
  /*
  private testKitList: TestKit[] = [
    {kitID: "TK0001", kitName: "Nose testing kit", stock: 456},
    {kitID: "TK0002", kitName: "Blood testing kit", stock: 114},
    {kitID: "TK0003", kitName: "Temperature testing kit", stock: 69},
    {kitID: "TK0004", kitName: "Ear testing kit", stock: 322},
  ]
  */

  getTestKitsLocal(){
    return this.testKitList;
  }


  getUpdatedTestKitsListener(){
    return this.updatedTestKits.asObservable();
  }

  updateTestKitStock(testKit: TestKit, updatedStock: number){
      const updatedTestKit: TestKit = {
        kitId: testKit.kitId,
        kitName: testKit.kitName,
        stock: updatedStock,
        centreId: testKit.centreId
      }

      this.http.put("http://localhost:3000/api/update-testkit/" + testKit.kitId, updatedTestKit)
        .subscribe(responseData => {
            alert("Test Kit " + testKit.kitName + " is updated")
            console.log(this.testKitList);
            for(let i=0; i < this.testKitList.length;i++){
                if(this.testKitList[i].kitId === updatedTestKit.kitId){
                  this.testKitList[i] = updatedTestKit;
                  break;
                }
            }
            this.updatedTestKits.next(this.testKitList);
        })

  }

  getTestKits(centreId: string){
    this.http.get<{message: string,testKits: TestKit[]}>("http://localhost:3000/api/testkits/" + centreId)
      .pipe(map(teskitData => {
        return teskitData.testKits.map(testkit => {
          console.log(testkit);
          return {
            kitId: testkit._id,
            kitName: testkit.kitName,
            stock: testkit.stock,
            centreId: testkit.centreId
          }
        })
      }))

      .subscribe(mappedTestKits => {
          this.testKitList = mappedTestKits;
          this.updatedTestKits.next(this.testKitList)
      })
  }

  addNewTestKit(testKit: TestKit){
    //this.testKitList.push(newTestKit);
    let newTestKit = testKit;
    this.http.post<{message: string,kitId: string}>("http://localhost:3000/api/add-testkit",newTestKit)
      .subscribe(responseData => {
          alert(responseData.message);
          console.log(responseData);

          newTestKit.kitId = responseData.kitId;

          console.log(newTestKit);
          this.testKitList.push(newTestKit);
          this.updatedTestKits.next(this.testKitList)
      })
  }

  /*
  generateKitID(): string{
    let nextID = this.testKitList.length + 1;
    let zeroPad = "";
    if(nextID.toString().length < 4){
      zeroPad = "0000";
      zeroPad = zeroPad.slice(0,4 - nextID.toString().length);
    }
    return "TK" + zeroPad + nextID;
  }*/

}
