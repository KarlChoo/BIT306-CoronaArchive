import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestCenterService } from "../centres/test-centre.service";
import { Centre } from "../../model/centre.model";

@Component({
  selector: 'app-register-test-center',
  templateUrl: './register-test-center.component.html',
  styleUrls: ['./register-test-center.component.css']
})
export class RegisterTestCenterComponent implements OnInit {
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
