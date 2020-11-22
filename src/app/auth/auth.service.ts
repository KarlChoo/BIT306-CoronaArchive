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
  private authStatusListener = new Subject<any>();
  constructor(private http: HttpClient, private router:Router) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  login(username: string, password: string) {
    const authData: AuthData = {username: username, password: password}

    this.http.post<{token:string, user:any}>("http://localhost:3000/api/login",authData)
      .subscribe(response =>{
          const token = response.token;
          const user = response.user
          this.token = token;
          console.log(user);
          this.authStatusListener.next(
            {
              token: token,
              user: user
            }
          )
          this.router.navigate(["/register"]);
      })
  }
}
