import { Component, Input, OnInit } from '@angular/core';
import { Library } from '@core/models/library.model';
import { LibraryService } from '@core/services/libraries/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input() library: Library;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    console.log(this.library);
  }

  deleteLibrary() {
    this.libraryService.deleteLibrary(20, this.library.book.bookId).subscribe(resp => console.log(resp));
  }
}
