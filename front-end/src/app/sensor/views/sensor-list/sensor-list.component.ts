import { ChangeDetectorRef, Component, Injector, OnDestroy, OnInit, PipeTransform } from '@angular/core';
import { SensorModelService } from '../../sensor-model.service';
import { ActionBarLayerRegistration, ContextualActionBarService } from "ngx-contextual-action-bar";
import { combineLatest, Observable, Subscription } from 'rxjs';
import { SidenavWrapperService } from 'src/app/core/sidenav-wrapper/sidenav-wrapper.service';
import { RightDrawerService } from 'src/app/core/sidenav-wrapper/right-drawer/right-drawer.service';
import { DrawerFilterComponent } from 'src/app/app-shared/drawer-filter/drawer-filter.component';
import { SensorFilterComponent } from '../sensor-filter/sensor-filter.component';
import { map } from 'rxjs/operators';
import { ISensor } from '../../sensor.model';
// import { DRAWER_FILTER_TOKEN, IDrawerFilterToken } from 'src/app/app-shared/drawer-filter/drawer-filter.token';

// const filterToken: IDrawerFilterToken = [
//   { property: 'name', label: 'Search', id: 'search', type: 'includes' },
//   { property: 'type', label: 'Avfallstype', id: 'type', type: 'includes',  }
// ]

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss'],
  providers: [
    // { provide: DRAWER_FILTER_TOKEN, useValue: filterToken }
  ]
})
export class SensorListComponent implements OnInit, OnDestroy {

  public get sensors$(){ return combineLatest([this.sensorModel.allSensors$, this.filters$]).pipe(
    map(([s, f]) => {
      const ns = s.filter(sen => {
        // return true;
        if (f.name.length < 1) return true;;
        for (const na of f.name) {
          if (!sen.name.includes(na)) return false;
        }
        return true;
      });

      return f.sort == 'name' ? ns.sort((a, b) => a.name > b.name ? -1 : 1) : ns
    })
  ) }

  public layer: ActionBarLayerRegistration = this.actionBar.register({
    background: '#FFF',
    color: '#000',
    title: 'Sensors',
    button: 'menu'
  });
  
  public buttonSubscription: Subscription = this.layer.onButtonClick.subscribe(() => {
    this.sidenav.toggleState()
  });

  openDrawer(){
    this.drawer.setOpen()
  }

  public drawerInstance: SensorFilterComponent | undefined;
  
  private get filters$(){
    return this.drawerInstance!.filters$
  }

  private get sort(): Observable<string> {
    return this.filters$.pipe(map(filters => filters.sort))
  }

  constructor(
    private sensorModel: SensorModelService,
    private actionBar: ContextualActionBarService,
    private sidenav: SidenavWrapperService,
    private drawer: RightDrawerService,
    private injector: Injector,
    private cd: ChangeDetectorRef
  ) {
    this.drawer.attachComponent(SensorFilterComponent, this.injector).subscribe(i => {
      this.drawerInstance = i as SensorFilterComponent;
      this.cd.markForCheck()
    })
  }

  ngOnInit(): void {
    this.drawerInstance!.filters$.subscribe(s => console.log(s))
  }

  ngOnDestroy(){
    this.buttonSubscription.unsubscribe();
  }

}
