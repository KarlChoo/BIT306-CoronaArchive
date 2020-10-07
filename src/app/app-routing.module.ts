import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Dylan's components
//Patients' components
import { ResultComponent } from './content/result/result.component';
import { CentresComponent } from './content/centres/centres.component';
//tester's components
import { TestComponent } from './content/test/test.component';

const routes: Routes = [
  {path: 'resultPage', component: ResultComponent},
  {path: 'centresPage', component: CentresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ResultComponent, CentresComponent,TestComponent]
