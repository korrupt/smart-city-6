import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveMapComponent } from './views/live-map/live-map.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { LiveMapService } from './live-map.service';

const routes: Route[] = [
  { path: '', component: LiveMapComponent }
]


@NgModule({
  declarations: [LiveMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule
  ],
  providers: [
    LiveMapService
  ]
})
export class LiveMapModule { }
