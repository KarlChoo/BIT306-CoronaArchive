import { Injectable } from '@angular/core';
import { Test } from 'src/app/model/Test.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor() { }
  private testLists: Test[] = [

  ];

  getTestList(){
    return this.testLists;
  }

  addNewTest(newTest: Test){
    this.testLists.push(newTest)
  }
}
