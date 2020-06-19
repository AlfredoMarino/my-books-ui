import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
