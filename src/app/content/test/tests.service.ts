import { Injectable } from '@angular/core';
import { Test } from 'src/app/model/Test.model';
import { User } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private patientList: User[] = [];
  private pendingTestList: Test[] = [];
  private testLists: Test[] = [ ];

  private  usersUpdated = new Subject<User[]>();
  private  ptestUpdated = new Subject<Test[]>();

  constructor(private http: HttpClient) { }

  getTestList(){
    return this.testLists;
  }

  addNewTest(testDate: string, username: string, patientType: string, symptom:string, testerID: string){
     //create new test
     const newTest: Test = {
      testDate: testDate,
      username: username,
      patientType: patientType,
      symptom: symptom,
      status: "Pending",
      testerID: testerID
    }
    this.http
    .post<{message:string, test: any}> ('http://localhost:3000/api/newTest', newTest)
    .subscribe((responseData) => {
      console.log(responseData.test);
      console.log(responseData.message);

      this.pendingTestList.push(responseData.test); //push the new post into posts array
      this.ptestUpdated.next([...this.pendingTestList]);
     /* const id = responseData.postId;
      post.id = id;
      console.log(responseData.message);
      this.posts.push(post); //push the new post into posts array
      this.postsUpdated.next([...this.posts]);
      //automatic routing
      this.router.navigate(['/']); */
    });
  }

  addNewPatient(username: string, password: string, name: string, patientType: string, symptom: string){
    const newPatient: User = {
      username: username,
      password: password,
      name: name,
      patientType: patientType,
      symptoms: symptom
    };
    this.http
    .post<{message:string, patient: any}> ('http://localhost:3000/api/newPatient', newPatient)
    .subscribe((responseData) => {
      console.log(responseData.patient);
      console.log(responseData.message);
     /* const id = responseData.postId;
      post.id = id;
      console.log(responseData.message);
      this.posts.push(post); //push the new post into posts array
      this.postsUpdated.next([...this.posts]);
      //automatic routing
      this.router.navigate(['/']); */
    });
  }

  getPatients(){
    this.http.get<{message: string, patients: any}>('http://localhost:3000/api/patients')
    .pipe(map(userData => {
      return userData.patients.map(patient => {
        return {
          username: patient.username,
          name: patient.name,
          patientType: patient.patientType,
        }
      })
    }))

    .subscribe(patientData =>{
        this.patientList = patientData;
        this.usersUpdated.next([...this.patientList]);

    })
  }

  getPatientUpdatedListener(){
    return this.usersUpdated.asObservable();
  }

  getPendingTests(){
    this.http.get<{message: string, pTests: any}>('http://localhost:3000/api/pendingTests')
    .pipe(map(testData => {
      return testData.pTests.map(test => {
        return {
          _id: test._id,
          testDate: test.testDate,
          username: test.username,
          patientType: test.patientType,
          symptom: test.symptom,
          status: test.status
        }
      })
    }))

    .subscribe(pTestData =>{
        this.pendingTestList = pTestData;
        this.ptestUpdated.next([...this.pendingTestList]);
        console.log(this.pendingTestList);
    })
  }

  getPendingTestUpdatedListener(){
    return this.ptestUpdated.asObservable();
  }
}
