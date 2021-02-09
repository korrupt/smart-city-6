import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerFilterComponent } from './drawer-filter.component';

import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";

const MATERIAL_MODULES = [
  MatChipsModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  declarations: [DrawerFilterComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
  ],
  exports: [DrawerFilterComponent],
  providers: [
    
  ]
})
export class DrawerFilterModule { }
