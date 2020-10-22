import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Officer } from "../../model/officer.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TestCentreOfficerService } from "./test-centre-officer.service";

@Component({
  selector: 'app-record-test-centre-officer',
  templateUrl: './record-test-centre-officer.component.html',
  styleUrls: ['./record-test-centre-officer.component.css']
})
export class RecordTestCentreOfficerComponent implements OnInit,AfterViewInit {
  constructor(public testCenterOfficerService:TestCentreOfficerService) { }

  ngOnInit(): void {
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
