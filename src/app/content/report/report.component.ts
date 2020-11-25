import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ReportService } from "./report.service";
import { TestsService } from "../test/tests.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from "../../model/Test.model";
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit,AfterViewInit {

  testList: Test[] = [];
  breakpoint:number;
  dimensionRatio;

  private reportSub: Subscription;

  displayedColumns: string[] = ['testId', 'testDate', 'username', 'patientType','symptom','status','result'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public reportService:ReportService, public testService:TestsService, public authService:AuthService) { }

  ngOnInit() {
    this.authService.validateManagerAccess();
    this.reportService.getAllCentreTest(this.authService.getUser().centreId);
    this.reportSub = this.reportService.getUpdatedTestsListener()
      .subscribe((tests: any) => {
        this.dataSource.data = tests;
        this.dataSource.paginator = this.paginator;
    })

    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
    this.dimensionRatio = (window.innerWidth <= 1000) ? "2:0.5" : "2.5:1";
    this.testList = this.testService.getTestList();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    this.dimensionRatio = (window.innerWidth <= 1000) ? "2:0.5" : "3:1";
  }
}
