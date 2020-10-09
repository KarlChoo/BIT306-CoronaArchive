import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from "../../model/Test.model";
import { TestsService } from "../test/tests.service";
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  //tests for patient array
  thePatientList: Test[] = [];
  constructor(public testService:TestsService) { }

  ngOnInit(): void {
    this.thePatientList = this.testService.getTestList();
  }

  //bind with table
  displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','result','resultDate'];
  dataSource = new MatTableDataSource<Test>(this.testService.getTestList());

}
