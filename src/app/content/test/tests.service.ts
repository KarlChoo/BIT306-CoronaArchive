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
  private  usersUpdated = new Subject<User[]>();

  private testLists: Test[] = [
    {testID: "T1", testDate: "10/8/2020, 11:58:04 PM", username: "Bob", patientType: "returnee", symptom: "Fever, Cough Blood", status: "Completed", result: "Negative", resultDate: "10/9/2020, 11:49:37 AM"},
    {testID: "T2", testDate: "10/8/2020, 11:59:04 PM", username: "Bob", patientType: "suspected", symptom: "Cough Blood", status: "Completed", result: "Negative", resultDate: "11/9/2020, 11:49:37 AM"},
    {testID: "T3", testDate: "10/8/2020, 11:59:50 PM", username: "Bob", patientType: "infected", symptom: "Fever, Chills", status: "Completed", result: "Positive", resultDate: "12/9/2020, 11:49:37 AM"}
  ];

  constructor(private http: HttpClient) { }

  getTestList(){
    return this.testLists;
  }

  addNewTest(newTest: Test){
    this.testLists.push(newTest)
  }

  generateTestID(): string{
    let nextID = this.testLists.length + 1;
    let zeroPad = "";
    if(nextID.toString().length < 4){
      zeroPad = "0000";
      zeroPad = zeroPad.slice(0,4 - nextID.toString().length);
    }
    return "T" + zeroPad + nextID;
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
    .subscribe(patientData =>{
        this.patientList = patientData.patients;
        this.usersUpdated.next([...this.patientList]);
        console.log(patientData.message);
    })
  }

  getPatientUpdatedListener(){
    return this.usersUpdated.asObservable();
  }
}
