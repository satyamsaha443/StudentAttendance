import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.scss']
})
export class StudentdetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public student:any){}

}
