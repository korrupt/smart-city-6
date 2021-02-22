import { NgModule } from "@angular/core";
import { NavigationListModule } from "./navigation-list/navigation-list.module";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { SidenavWrapperModule } from "./sidenav-wrapper/sidenav-wrapper.module";
import { ContainerModelService } from "./services/container-model.service";


const MATERIAL_MODULES = [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
];

@NgModule({
    imports: [
        NavigationListModule,
        SidenavWrapperModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        SidenavWrapperModule,
        ...MATERIAL_MODULES
    ],
    providers: [
        ContainerModelService
    ]
})
export class CoreModule {}