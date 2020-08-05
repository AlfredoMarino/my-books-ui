import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './components/library/library.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { MaterialModule } from '@material/material.module';
import { LibrariesRoutingModule } from "./libraries-routing.module";

@NgModule({
  declarations: [LibraryListComponent, LibraryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LibrariesRoutingModule
  ]
})
export class LibrariesModule { }
