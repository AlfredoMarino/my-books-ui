import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from '@material/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import {BooksModule} from '@books/books.module';
import {LibrariesModule} from '../libraries/libraries.module';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, LayoutComponent, SearchComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    BooksModule,
    LibrariesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
