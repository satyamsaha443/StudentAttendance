import { StudentdetailComponent } from './../studentdetail/studentdetail.component';
import { IStudent } from '../../shared/models/model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../shared/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';
import { EditdataStudentComponent } from '../editdata-student/editdata-student.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'action'];
  dataSource: MatTableDataSource<IStudent>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  

  constructor(private studentService: StudentService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<IStudent>();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllStudents();
    this.dataSource.filterPredicate = (data: IStudent, filter: string) => {
      const name = data.studentName.trim().toLowerCase();
      // const id = data.id?.toString();
      return name.includes(filter) ;
  }
}

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe((students: IStudent[]) => {
      this.dataSource = new MatTableDataSource<IStudent>(students);
      this.dataSource.paginator = this.paginator;
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

  isSignUp = false;

  onSignUp() {
    this.isSignUp = true;
  }

  onSignIn() {
    this.isSignUp = false;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewMore(studentId: number | undefined): void {
    const student = this.dataSource.data.find(s => s.id === studentId);
    if(student){
      this.dialog.open(StudentdetailComponent, {
        width: '400px',
        data: student
      });

  
    }
  }

}
