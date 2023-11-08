import { StudentService } from '../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAttendance, IStudent } from '../../models/model';


@Component({
  selector: 'app-attendance-give',
  templateUrl: './attendance-give.component.html',
  styleUrls: ['./attendance-give.component.scss']
})
export class AttendanceGiveComponent implements OnInit {
  attendance:Array<IStudent>=[]
  studentForm:FormGroup

  constructor(private service:StudentService, private router:Router){
    this.studentForm = new FormGroup({
      'studentId': new FormControl('', Validators.required),
      'date': new FormControl('', [Validators.required]),
      'present': new FormControl('', [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.service.getAllStudents().subscribe((data)=>{
      this.attendance = data
      this.service.studentAttendacne = this.attendance
    })
  }
  submitAttendance(){
    if(this.studentForm.valid){
      this.service.addAttendance(this.studentForm.value).subscribe(()=>{

        this.router.navigate(['/dashboard'])
      },() =>{
        alert("something went wrong!")
      })
    }
  }

}
