import { Injectable } from '@angular/core';
import { Officer } from "../../model/officer.model";

@Injectable({
  providedIn: 'root'
})
export class TestCentreOfficerService {

  constructor() { }

  private testerList: Officer[] = [
    {username: "kekw",password: "sdddd", name: "smolboi", position: "Tester"},
    {username: "grovel",password: "12345", name: "dolan", position: "Tester"},
    {username: "pupu",password: "9999", name: "mongoloid", position: "Tester"},
  ];

  getTesterList(){
    return this.testerList;
  }

  addNewTester(newTester: Officer){
    this.testerList.push(newTester)
  }

  removeTester(tester: Officer){
    let index = this.testerList.indexOf(tester);
    if(index > -1) this.testerList.splice(index,1);
  }
}
