import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'live-map', loadChildren: () => import('./live-map/live-map.module').then(m => m.LiveMapModule) },
  { path: 'sensors',  loadChildren: () => import('./sensor/sensor.module').then(m => m.SensorModule) },
  { path: '', redirectTo: 'live-map', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
