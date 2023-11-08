import { StudentService } from '../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  studentForm: FormGroup
  constructor(private StudentService: StudentService, private router: Router, public dialogRef: MatDialogRef<AddStudentComponent>){
    this.studentForm= new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
  }

  ngOnInt(): void {

  }
  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field =>{
      const control = this.studentForm.get(field);
      if (control instanceof FormControl){
      control.markAsTouched({onlySelf: true});
    }
    // if(this.studentForm.valid){
    //   this.dialogRef.close(this.studentForm.value);
    // }
  
    });

    if(this.studentForm.valid){
      this.StudentService.saveStudent(this.studentForm.value).subscribe(()=>{
        this.router.navigate(['/dashboard'])
      },()=>{
        alert("please try again later");
      })

    }

  }
  getErrorMessage(field: string){
    if(this.studentForm.get(field)?.hasError('required')){
      return 'You must enter a value';
    }
    return this.studentForm.get(field)?.hasError('email')? 'Not a valid email' : '';
  }

  closeModel(){
    this.dialogRef.close();
  }

}
