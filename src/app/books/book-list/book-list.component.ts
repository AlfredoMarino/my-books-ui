import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '@core/services/books/book.service';
import { Book } from '@core/models/book.model';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '@core/services/libraries/library.service';
import { environment } from '@environments/environment';
import { Library } from '@core/models/library.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input()
  books: Book[];

  bookSelected: Book;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ name }) => this.getBooksByName(name));
  }

  addBookToLibrary(bookSelected: Book) {
    console.log('bookSelected: ', bookSelected);
    this.bookSelected = bookSelected;
  }

  getBooksByName(name: string): void {
    this.bookService.getBooksByName(name).subscribe(books => {
      this.books = books;
      // this.bookSelected = this.books[2]; //TEMP
    });
    
  }

}
