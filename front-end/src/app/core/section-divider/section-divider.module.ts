import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDividerComponent } from './section-divider.component';

import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [SectionDividerComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    SectionDividerComponent
  ]
})
export class SectionDividerModule { }
