import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Officer } from "../../model/officer.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TestCentreOfficerService } from "./test-centre-officer.service";
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-record-test-centre-officer',
  templateUrl: './record-test-centre-officer.component.html',
  styleUrls: ['./record-test-centre-officer.component.css']
})
export class RecordTestCentreOfficerComponent implements OnInit,AfterViewInit {

  private testersSub: Subscription;
  columnName: string[] = ['userId','username', 'name','action'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public testCenterOfficerService:TestCentreOfficerService, public authService: AuthService) { }

  ngOnInit(): void {
      this.authService.validateManagerAccess()
      this.testCenterOfficerService.getTesters(this.authService.getUser().centreId)
      this.testersSub = this.testCenterOfficerService.getPostsUpdated()
        .subscribe((testers: Officer[]) => {
            this.dataSource.data = testers;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() : void {
    this.testersSub.unsubscribe();
  }

  recordNewTester(formData: NgForm){

    if(formData.invalid){
      return;
    }

    const newTester: Officer = {
        username: formData.value.username,
        password: formData.value.password,
        name: formData.value.name,
        position: "tester",
        centreId: this.authService.getUser().centreId
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
