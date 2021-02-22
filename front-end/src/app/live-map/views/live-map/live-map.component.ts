import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
// import {  } from '@angular/google-maps';
import { ContextualActionBarService } from 'ngx-contextual-action-bar';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SidenavWrapperService } from 'src/app/core/sidenav-wrapper/sidenav-wrapper.service';
import { environment } from 'src/environments/environment.development';
import { LiveMapService } from '../../live-map.service';

@Component({
  selector: 'app-live-map',
  templateUrl: './live-map.component.html',
  styleUrls: ['./live-map.component.scss']
})
export class LiveMapComponent implements OnInit, OnDestroy {

  constructor(
    private navbar: ContextualActionBarService,
    private sidenav: SidenavWrapperService,
    private http: HttpClient,
    private livemap: LiveMapService
  ) {
  
  }

  get containers$() { return this.livemap.containers }

  mapsOptions: google.maps.MapOptions = {
    streetViewControl: false,
    zoom: 13.69,
    center: {
      lat: 63.4234993,
      lng: 10.4057445
    },
    mapTypeControl: false,
    fullscreenControl: false
  }

  layer = this.navbar.register({
    background: '#FFF',
    color: '#000',
    title: 'Live-Map',
    button: 'menu'
  })

  buttonSub = this.layer.onButtonClick.subscribe(_ => {
    this.sidenav.toggleState()
  })

  ngOnInit(): void {
    this.containers$.subscribe(s => console.log(s))
  }

  ngOnDestroy() {
    this.buttonSub.unsubscribe()
  }

}
