import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceGiveComponent } from './attendance-give.component';

describe('AttendanceGiveComponent', () => {
  let component: AttendanceGiveComponent;
  let fixture: ComponentFixture<AttendanceGiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceGiveComponent]
    });
    fixture = TestBed.createComponent(AttendanceGiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
