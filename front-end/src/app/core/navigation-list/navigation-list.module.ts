import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationListService } from './navigation-list.service';
import { NavigationListComponent } from './views/navigation-list/navigation-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [
  MatListModule,
  MatIconModule
]

@NgModule({
  declarations: [NavigationListComponent],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    RouterModule
  ],
  exports: [
    NavigationListComponent
  ],
  providers: [
    NavigationListService
  ]
})
export class NavigationListModule { }
