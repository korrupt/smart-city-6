import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavWrapperComponent } from './sidenav-wrapper.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationListModule } from '../navigation-list/navigation-list.module';
import { SidenavWrapperService } from './sidenav-wrapper.service';

const MATERIAL_MODULES = [
  MatSidenavModule
]

@NgModule({
  declarations: [SidenavWrapperComponent],
  imports: [
    CommonModule,
    NavigationListModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    SidenavWrapperComponent,
    NavigationListModule
  ],
  providers: [
    SidenavWrapperService
  ]
})
export class SidenavWrapperModule { }
