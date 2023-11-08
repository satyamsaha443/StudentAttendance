import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAttendanceComponent } from './show-attendance.component';

describe('ShowAttendanceComponent', () => {
  let component: ShowAttendanceComponent;
  let fixture: ComponentFixture<ShowAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAttendanceComponent]
    });
    fixture = TestBed.createComponent(ShowAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
