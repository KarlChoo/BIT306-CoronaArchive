import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
  }

  /*
  getAllUsers(){
    this.http.get<{message: string, officers: any}>("http://localhost:3000/api/login")
      .subscribe(users => {
         this.userList = users.officers;
    });
  }

  validateCredentials(credentials: any) {
    const user = this.userList.filter(user => user.username === credentials.username && user.password === user.password);
    if(user.length > 0) console.log("Have user");

  }
  */
}
