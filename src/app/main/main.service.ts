import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private token: string;
  private user: any;
  private userType: string;

  constructor() { }

  getToken(){
    return this.token
  }

  setToken(token: string){
    this.token = token;
  }

  getUser(){
    return this.user
  }

  setUser(user: any){
    this.user = user;
  }

  getUserType(){
    return this.userType;
  }

  setUserType(userType: string){
    this.userType = userType;
  }


  logout(){
    this.setToken("");
    this.setUser([]);
  }
}
