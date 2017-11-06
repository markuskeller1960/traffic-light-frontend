import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatButtonModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    // CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class AppMaterialModule { }
