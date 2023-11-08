import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IStudent } from '../../models/model';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddStudentComponent } from '../add-student/add-student.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      transition('void <=> *', animate(500)),
    ]),
  ]
})
export class DashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'action'];
  dataSource: MatTableDataSource<IStudent>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  studentForm: FormGroup;
  private studentListSubject = new BehaviorSubject<IStudent[]>([]);
  public studentList$ = this.studentListSubject.asObservable();
  

  constructor(private studentService: StudentService, private dialog: MatDialog,  private router: Router) {
    this.dataSource = new MatTableDataSource<IStudent>();
    this.dataSource.paginator = this.paginator;
    this.studentForm= new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
   
    }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void { 
    this.studentService.getAllStudents().subscribe((students:IStudent[]) => 
    { 
      this.dataSource.data = students; 
      this.studentListSubject.next(students);
    });
  }

  deleteStudent(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this student?');

    if (confirmed) {
      this.studentService.deleteStudentById(id).subscribe(() => {
        this.getAllStudents();
      });
    }
  }

  openAddStudentDialog(): void{
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed', result);
      }
    });
  }

  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field =>{
      const control = this.studentForm.get(field);
      if (control instanceof FormControl){
        control.markAsTouched({onlySelf: true});
      }
    });

    if(this.studentForm.valid){
      this.studentService.saveStudent(this.studentForm.value).subscribe(()=>{
        this.router.navigate(['/dashboard'])
      },()=>{
        alert("Please try again later.");
      })
    }
  }
}