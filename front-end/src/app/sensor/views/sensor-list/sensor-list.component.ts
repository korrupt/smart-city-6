import { ChangeDetectorRef, Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { SensorModelService } from '../../sensor-model.service';
import { ActionBarLayerRegistration, ContextualActionBarService } from "ngx-contextual-action-bar";
import { Subscription } from 'rxjs';
import { SidenavWrapperService } from 'src/app/core/sidenav-wrapper/sidenav-wrapper.service';
import { RightDrawerService } from 'src/app/core/sidenav-wrapper/right-drawer/right-drawer.service';
import { DrawerFilterComponent } from 'src/app/app-shared/drawer-filter/drawer-filter.component';
import { DRAWER_FILTER_TOKEN, IDrawerFilterToken } from 'src/app/app-shared/drawer-filter/drawer-filter.token';

const filterToken: IDrawerFilterToken = {
  search: true,
  selectFilters: [
    { name: 'active', displayName: 'Active' }
  ]
}


@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss'],
  providers: [
    { provide: DRAWER_FILTER_TOKEN, useValue: filterToken }
  ]
})
export class SensorListComponent implements OnInit, OnDestroy {

  public get sensors$(){ return this.sensorModel.allSensors$; }

  public layer: ActionBarLayerRegistration = this.actionBar.register({
    background: '#FFF',
    color: '#000',
    title: 'Sensors',
    button: 'menu'
  });
  
  public buttonSubscription: Subscription = this.layer.onButtonClick.subscribe(() => {
    this.sidenav.toggleState()
  });

  public drawerInstance: DrawerFilterComponent | undefined;

  constructor(
    private sensorModel: SensorModelService,
    private actionBar: ContextualActionBarService,
    private sidenav: SidenavWrapperService,
    private drawer: RightDrawerService,
    private injector: Injector,
    private cd: ChangeDetectorRef
  ) {
    this.drawer.attachComponent(DrawerFilterComponent, this.injector).subscribe(i => {
      this.drawerInstance = i as DrawerFilterComponent;
      this.cd.markForCheck()
      // this.cd.detectChanges()
      console.log(this.drawerInstance);
    })
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(){
    this.buttonSubscription.unsubscribe();
  }

}
