import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@core/models/book.model';
import { Country } from '@core/models/country.model';
import { Library } from '@core/models/library.model';
import { Region } from '@core/models/region.model';
import { LibraryService } from '@core/services/libraries/library.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    console.log(this.book);
  }

  addBookToLibrary() {
    console.log(this)

    const currentCountry: Country = {
      countryId: 95
    }

    const currentRegion: Region = {
      regionId: 1866
    }

    const library: Library = {
      book: this.book,
      startDate: new Date(),
      endDate: new Date(),
      initialCountry: currentCountry,
      initialRegion: currentRegion,
      finalCountry: currentCountry,
      finalRegion: currentRegion,
      rating: 10,
      note: "me gustó"
    }
    

    this.libraryService.createLibrary(environment.personId, this.book.googleId, library).subscribe(library => console.log("done", library));
  }
}
