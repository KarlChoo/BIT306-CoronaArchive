import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TestKit } from "../../model/testkit.model";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TestKitService } from "./testkit.service";
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-test-kit-stock',
  templateUrl: './manage-test-kit-stock.component.html',
  styleUrls: ['./manage-test-kit-stock.component.css']
})
export class ManageTestKitStockComponent implements OnInit,AfterViewInit{

  private testKitSub: Subscription;

  columnName: string[] = ['kitId', 'kitName', 'stock','action'];
  dataSource = new MatTableDataSource<TestKit>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public testKitService: TestKitService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.validateManagerAccess();
    this.testKitService.getTestKits(this.authService.getUser().centreId);
    this.testKitSub = this.testKitService.getUpdatedTestKitsListener()
      .subscribe((testKits: TestKit[]) => {
          this.dataSource.data = testKits;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() : void{
      this.testKitSub.unsubscribe();
  }

  recordNewTestKit(formData: NgForm){

    if(formData.invalid){
      return;
    }

    const newTestkit: TestKit = {
      kitName: formData.value.kitname,
      stock: formData.value.stock,
      centreId: this.authService.getUser().centreId
    };
    this.testKitService.addNewTestKit(newTestkit);
    formData.resetForm();
    this.refreshTable();
  }

  refreshTable(){
    this.paginator._changePageSize(this.paginator.pageSize);
    this.dataSource.paginator = this.paginator;
  }

  updateTestKit(testKit: TestKit){
    let numInput = document.getElementById(testKit.kitId).querySelectorAll("input")[0];
    let updatedStock = Number(numInput.value);

    if(updatedStock < 1){
      alert("Test Kit stock must at least be 1")
      return;
    }

    if(updatedStock === testKit.stock){
      alert("Stock count has not been updated")
      return;
    }

    this.testKitService.updateTestKitStock(testKit, updatedStock);
  }

}
