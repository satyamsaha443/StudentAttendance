import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isHandset$: Observable<BreakpointState> = (this.breakpointObserver.observe(Breakpoints.Handset)).pipe(map(result => <BreakpointState>{ matches: result.matches, breakpoints: result.breakpoints }));

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInint(): void{

  }

}
