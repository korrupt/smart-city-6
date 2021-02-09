import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavWrapperComponent } from './sidenav-wrapper.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationListModule } from '../navigation-list/navigation-list.module';
import { SidenavWrapperService } from './sidenav-wrapper.service';
import { RightDrawerComponent } from './right-drawer/right-drawer.component';
import { RightDrawerService } from './right-drawer/right-drawer.service';
import { PortalModule } from '@angular/cdk/portal';

const MATERIAL_MODULES = [
  MatSidenavModule
]

@NgModule({
  declarations: [SidenavWrapperComponent, RightDrawerComponent],
  imports: [
    CommonModule,
    NavigationListModule,
    PortalModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    SidenavWrapperComponent,
    NavigationListModule,
    PortalModule
  ],
  providers: [
    SidenavWrapperService,
    RightDrawerService
  ]
})
export class SidenavWrapperModule { }
