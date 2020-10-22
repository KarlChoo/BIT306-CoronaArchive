import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestCenterService } from "../centres/test-centre.service";
import { Centre } from "../../model/centre.model";

@Component({
  selector: 'app-register-test-centre',
  templateUrl: './register-test-centre.component.html',
  styleUrls: ['./register-test-centre.component.css']
})
export class RegisterTestCentreComponent implements OnInit {
  constructor(public testCenterService:TestCenterService) { }

  ngOnInit(): void {
  }

  registerTestCenter(formData: NgForm){
    if(formData.invalid){
      return;
    }

    const newTestCenter: Centre = {
       centreID:  this.testCenterService.generateTestCenterID(),
       centreName: formData.value.centreName,
    }

    this.testCenterService.addNewTestCenter(newTestCenter);
    formData.resetForm();
  }
}
