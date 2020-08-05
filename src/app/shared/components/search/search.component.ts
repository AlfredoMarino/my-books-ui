import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookService } from '@core/services/books/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search = new FormControl('');
  hide = true;

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
  }

  searchBook() {
    
    console.log(this.search.value);
    
    this.bookService.getBooksByName(this.search.value).forEach(value => console.log(value));
    
  }


}
