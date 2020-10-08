import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isOpened: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.sideNavButtonAddEvent()
  }

  toggleSidenav(){
    this.isOpened = !this.isOpened;
  }

  sideNavButtonAddEvent(){
    let sidenavButtons = document.querySelector("#sidenav").querySelectorAll("button");
    sidenavButtons.forEach(button => {
        button.addEventListener("click", () =>{
            this.setButtonActive(button);
        })
    });
  }

  removeAllButtonActive(){
    let sidenavButtons = document.querySelector("#sidenav").querySelectorAll("button");
    sidenavButtons.forEach(button => {
      button.classList.remove("active");
    })
  }

  setButtonActive(btn){
    this.removeAllButtonActive();
    btn.classList.add("active");
  }
}
