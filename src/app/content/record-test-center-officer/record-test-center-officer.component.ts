import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Officer } from "../../model/officer.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-record-test-center-officer',
  templateUrl: './record-test-center-officer.component.html',
  styleUrls: ['./record-test-center-officer.component.css']
})
export class RecordTestCenterOfficerComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  officerList: Officer[] = [
      {username: "kekw",password: "sdddd", name: "dicklan", position: "Tester"},
      {username: "grovel",password: "12345", name: "dolan", position: "Tester"},
      {username: "mansex",password: "9999", name: "mongoloid", position: "Tester"},
  ];
*/
  officerList: Officer[] = []

  columnName: string[] = ['username', 'password', 'name', 'position','action'];
  dataSource = new MatTableDataSource<Officer>(this.officerList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  recordNewOfficer(formData: NgForm){

    if(formData.invalid){
      return;
    }

    const newOfficer: Officer = {
        username: formData.value.username,
        password: formData.value.password,
        name: formData.value.name,
        position: "Tester"
    }
    this.officerList.push(newOfficer);
    //alert("The new officer has been created");
    formData.resetForm();
    this.refreshTable();
  }

  refreshTable(){
    this.paginator._changePageSize(this.paginator.pageSize);
    this.dataSource.paginator = this.paginator;
  }
}
