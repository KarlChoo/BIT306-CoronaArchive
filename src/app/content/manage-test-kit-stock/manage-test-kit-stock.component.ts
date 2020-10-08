import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TestKit } from "../../model/testkit.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-manage-test-kit-stock',
  templateUrl: './manage-test-kit-stock.component.html',
  styleUrls: ['./manage-test-kit-stock.component.css']
})
export class ManageTestKitStockComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  /*
  testKitList: TestKit[] = [
    {kitID: "TK0001", kitName: "Nose testing kit", stock: 456},
    {kitID: "TK0002", kitName: "Blood testing kit", stock: 114},
    {kitID: "TK0003", kitName: "Temperature testing kit", stock: 69},
    {kitID: "TK0004", kitName: "Ear testing kit", stock: 322},
  ]
  */

  testKitList: TestKit[] = []

  columnName: string[] = ['kitID', 'kitName', 'stock'];
  dataSource = new MatTableDataSource<TestKit>(this.testKitList);

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
      kitID: this.generateKitID(),
      kitName: formData.value.kitname,
      stock: formData.value.stock
    };
    this.testKitList.push(newTestkit);
    formData.resetForm();
    this.refreshTable();
  }

  generateKitID(): string{
    let nextID = this.testKitList.length + 1;
    let zeroPad = "";
    if(nextID.toString().length < 4){
      zeroPad = "0000";
      zeroPad = zeroPad.slice(0,4 - nextID.toString().length);
    }
    return "TK" + zeroPad + nextID;
  }

  refreshTable(){
    this.paginator._changePageSize(this.paginator.pageSize);
    this.dataSource.paginator = this.paginator;
  }

}
