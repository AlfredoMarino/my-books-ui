import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Author } from '@core/models/author.model';
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

  isLoading: boolean = false;

  form: FormGroup = new FormGroup({
    rating: new FormControl(5),
    note: new FormControl()
  })

  private COUNTRY: Country = { countryId: environment.countryId }
  private REGION: Region = { regionId: environment.regionId }
  private NOW = new Date();

  constructor(private libraryService: LibraryService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addBookToLibrary(): void {
    this.isLoading = true;

    const library: Library = {
      book: this.bookSelected,
      startDate: this.NOW,
      endDate: this.NOW,
      initialCountry: this.COUNTRY,
      initialRegion: this.REGION,
      finalCountry: this.COUNTRY,
      finalRegion: this.REGION,
      rating: this.form.controls.rating.value,
      note: this.form.controls.note.value
    }

    this.libraryService.createLibrary(environment.personId, library.book.googleId, library)
      .subscribe(
        (response) => {
          this.snackBar.open(
            `The book was added to your library successfully 😀`,
            "Acept",
            { duration: 3000 }
          ).afterDismissed()
          .subscribe(() => {
            window.location.reload();
          });
        },
        (error: HttpErrorResponse) => {
          console.error(error)
          const errorMessage = error.error.message ? error.error.message : error.message
          this.snackBar.open(`Oops, a problem occurred 🤮 "${errorMessage}"`, "Acept");
          this.isLoading = false;
        }
      );
  }

  displayAuthors(authors: Author[]): string {
    return authors ? authors.map(author => author.name).join(", ") : "";
  }
}
