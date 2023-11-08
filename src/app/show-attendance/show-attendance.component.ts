import { StudentService } from '../../shared/services/student.service';
import { Component, OnInit } from '@angular/core';
import { IAttendance } from '../../shared/models/model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.scss']
})
export class ShowAttendanceComponent {
  displayedColumns: string[] = ['date', 'status'];

  attendance: Array<IAttendance>=[]
  attendanceId: Array<IAttendance>=[]
  id:number = 0;

  constructor(private activeRouter:ActivatedRoute, private studentService:StudentService){

  }
  // ngOnInit(): void{
  //   this.activeRouter.params.subscribe((paramsData) => {
  //     this.id = paramsData['id'];
  //     this.studentService.searchAttendance().subscribe((data) =>
  //     {
  //       this.attendance= data
  //       for(let i=0;i<this.attendance.length; i++){
  //         if(this.attendance[i].studentId===this.id){
  //           this.attendanceId.push(this.attendance[i])
  //         }
  //       }
  //     })
  //   })
  // }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.id = params['id'];
      this.fetchAttendance();
    });
  }

  fetchAttendance(): void {
    this.studentService.searchAttendance().subscribe((data) => {
      this.attendance = data.filter((att) => att.studentId === this.id);
    });
  }


}
