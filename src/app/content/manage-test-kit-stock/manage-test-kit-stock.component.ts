import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TestKit } from "../../model/testkit.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TestKitService } from "./testkit.service";

@Component({
  selector: 'app-manage-test-kit-stock',
  templateUrl: './manage-test-kit-stock.component.html',
  styleUrls: ['./manage-test-kit-stock.component.css']
})
export class ManageTestKitStockComponent implements OnInit {

  testKitList: TestKit[] = [];

  constructor(public testKitService: TestKitService) { }

  ngOnInit(): void {
    this.testKitList = this.testKitService.getTestKits();
  }

  columnName: string[] = ['kitID', 'kitName', 'stock'];
  dataSource = new MatTableDataSource<TestKit>(this.testKitService.getTestKits());


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  recordNewTestKit(formData: NgForm){

    if(formData.invalid){
      return;
    }

    const newTestkit: TestKit = {
      kitID: this.testKitService.generateKitID(),
      kitName: formData.value.kitname,
      stock: formData.value.stock
    };
    this.testKitService.addNewTestKits(newTestkit);
    formData.resetForm();
    this.refreshTable();
  }

  refreshTable(){
    this.paginator._changePageSize(this.paginator.pageSize);
    this.dataSource.paginator = this.paginator;
  }

}
