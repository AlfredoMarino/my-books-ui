import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryService } from './services/libraries/library.service';
import { BookService } from './services/books/book.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LibraryService,
    BookService
  ]
})
export class CoreModule { }
