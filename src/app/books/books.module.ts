import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { MaterialModule } from '@material/material.module';
import { LibrariesModule } from '../libraries/libraries.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, BookListComponent, BookDetailsComponent],
  exports: [
    BookComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LibrariesModule
  ]
})
export class BooksModule { }
