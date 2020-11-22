import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { MainService } from "./main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isOpened: boolean = false;
  token: string;
  user: any;
  private authListenerSubs: Subscription;
  constructor(public mainService: MainService, public authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(subData =>{
        this.token = subData.token;
        this.user = subData.user;
    })
  }

  toggleSidenav(){
    this.isOpened = !this.isOpened;
  }

  logout(){
    this.token = "";
    alert("Logout successful");
    this.router.navigate(["/"]);
  }
}
