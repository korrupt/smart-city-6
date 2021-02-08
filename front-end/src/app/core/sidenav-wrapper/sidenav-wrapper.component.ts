import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SidenavWrapperService } from './sidenav-wrapper.service';

import { BreakpointObserver, MediaMatcher } from "@angular/cdk/layout";
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent implements OnInit {

  public get state$() { return this.sidenav.state$; }

  private _mobileQueryListener!: () => void;
  public mobileQuery;

  constructor(
    private sidenav: SidenavWrapperService,
    private bp: BreakpointObserver,
    private media: MediaMatcher,
    private cd: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.cd.detectChanges()
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    
  }

}
