import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes, RouterModule } from "@angular/router";


//Own components here
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RegisterTestCenterComponent } from './content/register-test-center/register-test-center.component';
import { DashboardComponent } from './content//dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
//import { BranchpanelComponent } from './branchpanel/branchpanel.component';
import { RecordTestCenterOfficerComponent } from './content/record-test-center-officer/record-test-center-officer.component';
import { ManageTestKitStockComponent } from './content/manage-test-kit-stock/manage-test-kit-stock.component';

//Dylan's Components
import { ResultComponent } from './content/result/result.component';
import { CentresComponent } from './content/centres/centres.component';
import { TestComponent } from './content/test/test.component';

//Material imports here
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule}  from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RegisterTestCenterComponent,
    DashboardComponent,
    FooterComponent,
    RecordTestCenterOfficerComponent,
    ResultComponent,
    CentresComponent,
    TestComponent,
    ManageTestKitStockComponent //routing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
