
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule} from "@angular/material/menu";
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AddStudentComponent } from '../shared/components/add-student/add-student.component';
import { MatInputModule } from '@angular/material/input';
import { EditdataStudentComponent } from './editdata-student/editdata-student.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ShowAttendanceComponent } from './show-attendance/show-attendance.component';
import { AttendanceGiveComponent } from '../shared/components/attendance-give/attendance-give.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { SharedModule } from 'src/shared/shared.module';






@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    AddStudentComponent,
    EditdataStudentComponent,
    ShowAttendanceComponent,
    AttendanceGiveComponent,
    NavbarComponent,
    StudentdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule, 
    MatCardModule,
    NgxChartsModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap:[AppComponent]
  
})
export class AppModule { }
