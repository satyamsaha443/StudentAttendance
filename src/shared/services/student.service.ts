import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAttendance, IStudent } from '../../shared/models/model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentListSubject = new BehaviorSubject<IStudent[]>([]);
  public studentList$ = this.studentListSubject.asObservable();
  
studentData: Array<IStudent>=[]
attendance: Array<IAttendance>=[]
studentAttendacne: Array<IStudent>=[]

  constructor(private http: HttpClient) { }

  saveStudent(student: IStudent): Observable<any>{
    return this.http.post(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/student`, student)
  }

  getAllStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/student`)
      .pipe(
        tap(students => this.studentListSubject.next(students))
      );
  }

  getStudentById(id:any): Observable<IStudent>{
    return this.http.get<IStudent>(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/student/${id}`)
  }

  updateStudentById(studentId:number, studentdata:IStudent): Observable<any>{
    return this.http.put(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/student/${studentId}`,studentdata)
  }

  deleteStudentById(id:number): Observable<any>{
    return this.http.delete(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/student/${id}`)
      .pipe(
        tap(() => {
          const updatedStudents = this.studentListSubject.getValue().filter(student => student.id !== id);
          this.studentListSubject.next(updatedStudents);
        })
      );
  }

  addAttendance(attendance: IAttendance): Observable<any>{
    return this.http.post(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/attendance`, attendance)
  }

  searchAttendance(): Observable<IAttendance[]>{
    return this.http.get<IAttendance[]>(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/attendance`)
  }

  getAttendanceById(id:any): Observable<IStudent>{
    return this.http.get<IStudent>(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/attendance/${id}`)
  }

  deleteAttendanceById(id:number): Observable<any>{
    return this.http.delete(`https://6539e9dfe3b530c8d9e8d3cf.mockapi.io/attendance/${id}`);
  }
}

