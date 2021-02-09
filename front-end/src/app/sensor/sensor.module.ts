import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorModelService } from './sensor-model.service';
import { SensorListComponent } from './views/sensor-list/sensor-list.component';
import { Route, RouterModule } from '@angular/router';
import { SensorSmallComponent } from './views/sensor-small/sensor-small.component';
import { MatIconModule } from '@angular/material/icon';
import { SectionDividerModule } from '../core/section-divider/section-divider.module';
import { DrawerFilterModule } from '../app-shared/drawer-filter/drawer-filter.module';

const MATERIAL_MODULES = [
  MatIconModule  
]

const routes: Route[] = [
  { path: '', component: SensorListComponent }
]


@NgModule({
  declarations: [SensorListComponent, SensorSmallComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SectionDividerModule,
    DrawerFilterModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    SensorModelService
  ]
})
export class SensorModule { }
 