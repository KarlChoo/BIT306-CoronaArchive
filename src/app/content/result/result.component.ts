import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from "../../model/Test.model";
import { TestsService } from "../test/tests.service";
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  //tests for patient array
  thePatientList: Test[] = [];
  pResultList: Test[] = [];

  private resultSubs: Subscription;
  constructor(public testService:TestsService) { }

  ngOnInit(): void {
    //this.thePatientList = this.testService.getTestList();

    //pending transactions
    this.testService.getPatientResults();
    this.resultSubs = this.testService.getPatientResultUpdatedListener()
      .subscribe((pResult: Test[]) => {
        this.pResultList = pResult;
        this.dataSource.data = pResult;
        this.thePatientList = pResult;
        //this.dataSource.paginator = this.paginator;
        //this.dataSource.sort = this.sort;
      });
  }

  //bind with table
  displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','result','resultDate', 'TesterID'];
  dataSource = new MatTableDataSource();

}
