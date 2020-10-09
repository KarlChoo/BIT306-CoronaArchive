import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Officer } from "../../model/officer.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TestCenterOfficerService } from "./test-center-officer.service";

@Component({
  selector: 'app-record-test-center-officer',
  templateUrl: './record-test-center-officer.component.html',
  styleUrls: ['./record-test-center-officer.component.css']
})
export class RecordTestCenterOfficerComponent implements OnInit,AfterViewInit {

  testerList: Officer[] = []

  constructor(public testCenterOfficerService:TestCenterOfficerService) { }

  ngOnInit(): void {
    this.testerList = this.testCenterOfficerService.getTesterList();
  }

  columnName: string[] = ['username', 'password', 'name', 'position','action'];
  dataSource = new MatTableDataSource<Officer>(this.testCenterOfficerService.getTesterList());

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  recordNewTester(formData: NgForm){

    if(formData.invalid){
      return;
    }

    const newTester: Officer = {
        username: formData.value.username,
        password: formData.value.password,
        name: formData.value.name,
        position: "Tester"
    }
    this.testCenterOfficerService.addNewTester(newTester)
    //alert("The new officer has been created");
    formData.resetForm();
    this.refreshTable();
  }

  removeTester(tester: Officer){
    this.testCenterOfficerService.removeTester(tester);
    this.refreshTable();
  }

  refreshTable(){
    this.paginator._changePageSize(this.paginator.pageSize);
    this.dataSource.paginator = this.paginator;
  }
}
