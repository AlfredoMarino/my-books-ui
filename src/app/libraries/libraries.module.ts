import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './components/library/library.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { MaterialModule } from '@material/material.module';
import { LibrariesRoutingModule } from "./libraries-routing.module";
import { LibraryDetailsComponent } from './components/library-details/library-details.component';

@NgModule({
  declarations: [LibraryListComponent, LibraryComponent, LibraryDetailsComponent],
  exports: [
    LibraryDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LibrariesRoutingModule
  ]
})
export class LibrariesModule { }
