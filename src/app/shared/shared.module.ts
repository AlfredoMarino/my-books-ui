import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from '@material/material.module';
import {MatIconModule} from '@angular/material/icon';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import {BooksModule} from '@books/books.module';
import {LibrariesModule} from '../libraries/libraries.module';



@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, LayoutComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    BooksModule,
    LibrariesModule
  ]
})
export class SharedModule { }
