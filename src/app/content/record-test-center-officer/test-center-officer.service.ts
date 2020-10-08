import { Injectable } from '@angular/core';
import { Officer } from "../../model/officer.model";

@Injectable({
  providedIn: 'root'
})
export class TestCenterOfficerService {

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
}
