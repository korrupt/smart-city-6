import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavWrapperService } from './sidenav-wrapper.service';

import { BreakpointObserver, MediaMatcher } from "@angular/cdk/layout";
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { RightDrawerService } from './right-drawer/right-drawer.service';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent implements OnInit {

  public get state$()  { return this.sidenav.state$; }
  public get drawer$() { return this.drawer.state$; }

  @ViewChild('drawer', { read: MatSidenav }) private dr!: MatSidenav;

  public setClosed(): void {
    this.sidenav.setClosed()
  }

  private _mobileQueryListener!: () => void;
  public mobileQuery;

  constructor(
    private sidenav: SidenavWrapperService,
    private drawer: RightDrawerService,
    private media: MediaMatcher,
    private cd: ChangeDetectorRef
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.cd.detectChanges()
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    
  }

}
