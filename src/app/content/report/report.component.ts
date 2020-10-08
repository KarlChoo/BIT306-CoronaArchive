import { Component, OnInit } from '@angular/core';
import { ReportService } from "./report.service";
import { Test } from "../../model/Test.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  testList: Test[] = [];
  breakpoint:number;
  dimensionRatio;

  constructor(public reportService:ReportService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 3;
    this.dimensionRatio = (window.innerWidth <= 1000) ? "2:0.5" : "2.5:1";
    console.log(this.dimensionRatio);

  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 3;
    this.dimensionRatio = (window.innerWidth <= 1000) ? "2:0.5" : "3:1";
  }

}
