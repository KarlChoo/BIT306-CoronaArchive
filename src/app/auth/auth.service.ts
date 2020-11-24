import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { AuthData } from "../model/auth-data.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private token: string;
  private user: any;
  private userType: string;
  private authStatusListener = new Subject<any>();
  constructor(private http: HttpClient, private router:Router) {}

  getToken() {
    return this.token;
  }

  getUser(){
    return this.user;
  }

  getUserType(){
    return this.userType;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  logout() {
    this.token = null;
    this.user = null;
    this.userType = null;
  }

  getCredentials(){
    this.authStatusListener.next(
      {
        token: this.getToken(),
        user: this.getUser(),
        userType: this.getUserType()
      }
     )
  }

  validateManagerAccess(){
    if(!this.getUser().centreId){
      alert("Please register a centre name first")
      this.router.navigate(["/register"]);
    }
  }

  login(username: string, password: string) {
    const authData: AuthData = {username: username, password: password}

    this.http.post<{token:string, user:any}>("http://localhost:3000/api/login",authData)
      .subscribe(response =>{
          const token = response.token;
          const user = response.user
          this.token = token;
          this.user = user

          console.log(this.token);


          let userType;
          if(user.position === "manager") userType = "manager"
          else if(user.position === "tester") userType = "tester"
          else if(user.position === "admin") userType = "admin"
          else userType = "patient"

          this.userType = userType;

          this.authStatusListener.next(
            {
              token: token,
              user: user,
              userType: userType
            }
           )

          if(userType === "manager") this.router.navigate(["/register"]);
          else if(userType === "tester") this.router.navigate(["/newTest"]);
          else if(userType === "admin") this.router.navigate(["/centresPage"]);
          else this.router.navigate(["/resultPage"]);


        },
        (error) => {
          //console.log(error);
        }
      )
  }
}
