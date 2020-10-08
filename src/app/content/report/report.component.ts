import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ReportService } from "./report.service";
import { TestsService } from "../test/tests.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from "../../model/Test.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit,AfterViewInit {

  testList: Test[] = [];
  breakpoint:number;
  dimensionRatio;

  constructor(public reportService:ReportService, public testService:TestsService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
    this.dimensionRatio = (window.innerWidth <= 1000) ? "2:0.5" : "2.5:1";
    this.testList = this.reportService.getAllTests();
  }

  displayedColumns: string[] = ['testID', 'testDate', 'username', 'patientType','symptom','status','result'];
  dataSource = new MatTableDataSource<Test>(this.reportService.getAllTests());

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    this.dimensionRatio = (window.innerWidth <= 1000) ? "2:0.5" : "3:1";
  }




}