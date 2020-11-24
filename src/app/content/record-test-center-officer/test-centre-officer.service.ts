import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Officer } from "../../model/officer.model";

@Injectable({
  providedIn: 'root'
})
export class TestCentreOfficerService {

  private testersUpdated = new Subject<Officer[]>();

  constructor(private http: HttpClient) { }

  private testerList: Officer[] = [];

  /*
  private testerList: Officer[] = [
    {username: "kekw",password: "sdddd", name: "smolboi", position: "Tester"},
    {username: "grovel",password: "12345", name: "dolan", position: "Tester"},
    {username: "pupu",password: "9999", name: "mongoloid", position: "Tester"},
  ];*/

  getTesterList(){
    return this.testerList;
  }

  getPostsUpdated(){
    return this.testersUpdated.asObservable();
  }

  getTesters(centreId: string){
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

      .subscribe(responseData =>{
          this.testerList = responseData;
          this.testersUpdated.next(responseData);
      })
  }

  addNewTester(newTester: Officer){
    this.http.post<{message:string, newTester: any}>("http://localhost:3000/api/register-tester",newTester)
      .pipe(map(testerData => {
          return {
            userId: testerData.newTester._id,
            username: testerData.newTester.username,
            password: testerData.newTester.password,
            name: testerData.newTester.name,
            position: testerData.newTester.position
          }
        })
      )

      .subscribe(mappedTester => {
          console.log(mappedTester);
          alert("New tester with username " + mappedTester.username + " has been added")
          this.testerList.push(mappedTester);
          this.testersUpdated.next(this.testerList);
      })
  }

  removeTester(tester: Officer){
    this.http.delete<{message:string}>("http://localhost:3000/api/delete-tester/"+ tester.userId)
      .subscribe(responseData => {
          alert("Tester with username " + tester.username + " has been deleted");
          const updatedTesters = this.testerList.filter(deleteTester => deleteTester.userId !== tester.userId);
          this.testerList = updatedTesters;
          this.testersUpdated.next([...this.testerList]);
      })
  }
}
