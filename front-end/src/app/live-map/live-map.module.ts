import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveMapComponent } from './views/live-map/live-map.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', component: LiveMapComponent }
]


@NgModule({
  declarations: [LiveMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LiveMapModule { }
