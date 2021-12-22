import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '@core/services/books/book.service';
import { Book } from '@core/models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input()
  books: Book[];

  bookSelected: Book;
  tabPosition: number = 0;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ name }) => {
      this.getBooksByName(name);
      this.tabPosition = 0;
    });
  }

  addBookToLibrary(bookSelected: Book) {
    this.bookSelected = bookSelected;
    this.tabPosition = 1;
  }

  getBooksByName(name: string): void {
    this.bookService.getBooksByName(name).subscribe(books => {
      this.books = books;
    });
  }
}
