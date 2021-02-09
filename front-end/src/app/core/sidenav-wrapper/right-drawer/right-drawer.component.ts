import { CdkPortal, CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RightDrawerService } from './right-drawer.service';

@Component({
  selector: 'app-right-drawer',
  templateUrl: './right-drawer.component.html',
  styleUrls: ['./right-drawer.component.scss']
})
export class RightDrawerComponent implements OnInit, OnDestroy {

  @ViewChild(CdkPortalOutlet, { static: true }) private portal!: CdkPortalOutlet;

  public activePortalSubscription: Subscription;
  
  constructor(
    private drawer: RightDrawerService
  ) {
    this.activePortalSubscription = this.drawer._activePortal.subscribe(portal => {
      if (this.portal) this.portal.detach()

      if (portal) {
        const ref = this.portal.attachComponentPortal(portal);
        this.drawer._activePortalInstance.next(ref.instance);
      }
    })
  }
  
  
  ngOnInit(): void {
    // console.log(this.portal);
    // this.activePortalSubscription.subscribe(s => console.log(s))
  }

  ngOnDestroy(): void {
    this.activePortalSubscription.unsubscribe();
  }

}
