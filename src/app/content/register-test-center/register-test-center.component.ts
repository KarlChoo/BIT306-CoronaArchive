import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-test-center',
  templateUrl: './register-test-center.component.html',
  styleUrls: ['./register-test-center.component.css']
})
export class RegisterTestCenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerTestCenter(formData: NgForm){
    if(formData.invalid){
      return;
    }
  }
}
