import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from "./login.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService:LoginService, public authService: AuthService) { }

  ngOnInit(): void {
    //this.loginService.getAllUsers();
  }

  onLogin(formData: NgForm){
    if(formData.invalid){
      return;
    }

    //this.loginService.validateCredentials(formData.value);
    this.authService.login(formData.value.username,formData.value.password)
  }
}
