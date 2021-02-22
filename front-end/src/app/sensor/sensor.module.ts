import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorModelService } from './sensor-model.service';
import { SensorListComponent } from './views/sensor-list/sensor-list.component';
import { Route, RouterModule } from '@angular/router';
import { SensorSmallComponent } from './views/sensor-small/sensor-small.component';
import { MatIconModule } from '@angular/material/icon';
import { SectionDividerModule } from '../core/section-divider/section-divider.module';
// import { DrawerFilterModule } from '../app-shared/drawer-filter/drawer-filter.module';
import { MatInputModule } from '@angular/material/input';
import { SensorFilterComponent } from './views/sensor-filter/sensor-filter.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL_MODULES = [
  MatIconModule,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  MatSelectModule
]

const routes: Route[] = [
  { path: '', component: SensorListComponent }
]


@NgModule({
  declarations: [SensorListComponent, SensorSmallComponent, SensorFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SectionDividerModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES

  ],
  providers: [
    SensorModelService
  ]
})
export class SensorModule { }
 