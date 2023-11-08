import { EditdataStudentComponent } from './editdata-student/editdata-student.component';
import { DashboardComponent } from "../shared/components/dashboard/dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";
import { NgModule } from "@angular/core";
import { AddStudentComponent } from "../shared/components/add-student/add-student.component";
import { ShowAttendanceComponent } from './show-attendance/show-attendance.component';
import { AttendanceGiveComponent } from '../shared/components/attendance-give/attendance-give.component';



const routes: Routes = [
 
  {
    path:'navbar',
    component: NavbarComponent
  },
  {
    path:'sidebar',
    component: SidebarComponent
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'navbar', pathMatch: 'full'},
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'editdatastudent/:id', component: EditdataStudentComponent },
  { path: 'attendancegive', component: AttendanceGiveComponent},
  { path: 'showattendance/:id', component: ShowAttendanceComponent}
 
  
];

  @NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }