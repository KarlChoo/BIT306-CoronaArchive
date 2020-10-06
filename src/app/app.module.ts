import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Own components here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RegisterTestCenterComponent } from './content/test-center/register-test-center/register-test-center.component';
import { DashboardComponent } from './content/dashboard/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { BranchpanelComponent } from './branchpanel/branchpanel.component';

//Material imports here
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RegisterTestCenterComponent,
    DashboardComponent,
    FooterComponent,
    BranchpanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
