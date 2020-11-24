import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Centre } from 'src/app/model/centre.model';
import { TestCenterService } from "../centres/test-centre.service";

@Component({
  selector: 'app-register-test-centre',
  templateUrl: './register-test-centre.component.html',
  styleUrls: ['./register-test-centre.component.css']
})
export class RegisterTestCentreComponent implements OnInit {

  newCentre: Centre;
  private newCentreSub: Subscription

  constructor(public testCenterService:TestCenterService, public authService: AuthService) { }

  ngOnInit(): void {
      this.initTestCentre();
      this.newCentreSub = this.testCenterService.getNewCentreListener()
        .subscribe(newCentre => {
            this.newCentre = newCentre
        })
  }

  initTestCentre(){
      const currentUser = this.authService.getUser();
      if(currentUser.centreId){
        this.testCenterService.getTestCentre(currentUser.centreId)
        this.newCentreSub = this.testCenterService.getNewCentreListener()
        .subscribe(newCentre => {
            this.newCentre = newCentre
        })
      }
  }

  registerTestCenter(formData: NgForm){
    if(formData.invalid){
      return;
    }

    this.testCenterService.addNewTestCenter(formData.value.centreName, this.authService.getUser());
    formData.resetForm();
  }
}
