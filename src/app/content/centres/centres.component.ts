import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Centre } from 'src/app/model/centre.model';
import { TestCenterService } from "./test-centre.service";

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent implements OnInit, OnDestroy {

  testCentreList: Centre[] = [];
  private centreSub: Subscription;

  displayedColumns: string[] = ['centreID', 'centreName'];
  centreDataSource;

  constructor(public testCenterService:TestCenterService) { }

  ngOnInit(): void {
    this.testCenterService.getTestCentreList();
    this.centreSub = this.testCenterService.getCentreUpdatedListener()
        .subscribe((centres: Centre[]) => {
          this.testCentreList = centres;
          this.centreDataSource = this.testCenterService.getTestCentreListLocal();
    });
    console.log("ok");
  }

  ngOnDestroy(): void {

  }


}
