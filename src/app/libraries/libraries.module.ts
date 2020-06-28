import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library/library.component';
import {LibraryListComponent} from './library-list/library-list.component';
import {MaterialModule} from '@material/material.module';

@NgModule({
  declarations: [LibraryListComponent, LibraryComponent],
  exports: [
    LibraryListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LibrariesModule { }
