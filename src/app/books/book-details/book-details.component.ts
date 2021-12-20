import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '@core/models/book.model';
import { Country } from '@core/models/country.model';
import { Library } from '@core/models/library.model';
import { Region } from '@core/models/region.model';
import { LibraryService } from '@core/services/libraries/library.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  bookSelected: Book;

  panelOpenState = false;
  form: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    rating: new FormControl(),
    note: new FormControl()
  })

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }
  
  addBookToLibrary() {
    const currentCountry: Country = {
      countryId: 95
    }

    const currentRegion: Region = {
      regionId: 1866
    }

    const library: Library = {
      book: this.bookSelected,
      startDate: this.form.controls.startDate.value,
      endDate: this.form.controls.endDate.value,
      initialCountry: currentCountry,
      initialRegion: currentRegion,
      finalCountry: currentCountry,
      finalRegion: currentRegion,
      rating: this.form.controls.rating.value,
      note: this.form.controls.note.value
    }


    this.libraryService.createLibrary(environment.personId, library.book.googleId, library).subscribe(library => console.log("done", library));
  }
}
