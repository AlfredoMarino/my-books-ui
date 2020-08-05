import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime } from 'rxjs/operators';
import { BookService } from '@core/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search = new FormControl('');

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
  }

  searchBook() {
    
    console.log(this.search.value);
    
    this.bookService.getBooksByName(this.search.value).forEach(value => console.log(value));
    
  }
  
  // @Output("search") searchEmitter = new EventEmitter<string>();
  // search = new FormControl('');

  // ngOnInit() {
  //   this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))
  // }
  hide = true;
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions: Observable<string[]>;

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     debounceTime(3000),
  //     map(value => this._filter(value))
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }
}
