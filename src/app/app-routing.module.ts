import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Dylan's components
//Patients' components
import { ResultComponent } from './content/result/result.component';
import { CentresComponent } from './content/centres/centres.component';
//tester's components
import { TestComponent } from './content/test/test.component';

//Karl's components
import { RecordTestCentreOfficerComponent } from './content/record-test-center-officer/record-test-centre-officer.component';
import { ManageTestKitStockComponent } from './content/manage-test-kit-stock/manage-test-kit-stock.component'
import { RegisterTestCentreComponent } from "./content/register-test-center/register-test-centre.component";
import { ReportComponent } from "./content/report/report.component";

const routes: Routes = [
  {path: 'resultPage', component: ResultComponent},
  {path: 'centresPage', component: CentresComponent},
  {path: 'newTest', component: TestComponent},
  {path: 'tester', component: RecordTestCentreOfficerComponent},
  {path: 'testkit', component: ManageTestKitStockComponent},
  {path: 'register', component: RegisterTestCentreComponent},
  {path: 'report', component: ReportComponent},
  {path: '',  redirectTo: '/centresPage', pathMatch: 'full' } // default page, should be the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ResultComponent,
  CentresComponent,
  TestComponent,
  RecordTestCentreOfficerComponent,
  ManageTestKitStockComponent,
  RegisterTestCentreComponent,
  ReportComponent
]
