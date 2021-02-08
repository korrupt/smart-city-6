import { Component, OnDestroy, OnInit } from '@angular/core';
import { SensorModelService } from '../../sensor-model.service';
import { ActionBarLayerRegistration, ContextualActionBarService } from "ngx-contextual-action-bar";
import { Subscription } from 'rxjs';
import { SidenavWrapperService } from 'src/app/core/sidenav-wrapper/sidenav-wrapper.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
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

  constructor(
    private sensorModel: SensorModelService,
    private actionBar: ContextualActionBarService,
    private sidenav: SidenavWrapperService
  ) {
     
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(){
    this.buttonSubscription.unsubscribe();
  }

}
