import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@core/models/book.model';
import { Country } from '@core/models/country.model';
import { Library } from '@core/models/library.model';
import { Region } from '@core/models/region.model';
import { LibraryService } from '@core/services/libraries/library.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.css']
})
export class LibraryDetailsComponent implements OnInit {

  @Input()
  bookSelected: Book;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void { }


  addBookToLibrary() {
    const currentCountry: Country = {
      countryId: 95
    }

    const currentRegion: Region = {
      regionId: 1866
    }

    const library: Library = {
      book: this.bookSelected,
      startDate: new Date(),
      endDate: new Date(),
      initialCountry: currentCountry,
      initialRegion: currentRegion,
      finalCountry: currentCountry,
      finalRegion: currentRegion,
      rating: 10,
      note: "me gustó"
    }
    

    this.libraryService.createLibrary(environment.personId, library.book.googleId, library).subscribe(library => console.log("done", library));
  }
}
