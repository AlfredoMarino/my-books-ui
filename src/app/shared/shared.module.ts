import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from '../material/material.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule
  ]
})
export class SharedModule { }
