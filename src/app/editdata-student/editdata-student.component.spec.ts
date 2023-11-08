import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdataStudentComponent } from './editdata-student.component';

describe('EditdataStudentComponent', () => {
  let component: EditdataStudentComponent;
  let fixture: ComponentFixture<EditdataStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdataStudentComponent]
    });
    fixture = TestBed.createComponent(EditdataStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
