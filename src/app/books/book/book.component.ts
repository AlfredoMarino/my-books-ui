import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '@core/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  bookSelected = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void { }

  addBookToLibrary() {
    this.bookSelected.emit(this.book);
  }
}
