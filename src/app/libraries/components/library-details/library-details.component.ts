import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Author } from '@core/models/author.model';
import { Library } from '@core/models/library.model';
import { LibraryService } from '@core/services/libraries/library.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.css']
})
export class LibraryDetailsComponent implements OnInit {

  @Input()
  librarySelected: Library;

  isLoading: boolean = false;

  constructor(private libraryService: LibraryService, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  deleteLibrary(library: Library) {
    this.isLoading = true;
    this.libraryService.deleteLibrary(environment.personId, library.book.bookId)
      .subscribe(
        (resp) => {
          this.snackBar.open(
            `The book was deleted from your library successfully 👻`,
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
    return authors.map(author => author.name).join(", ");
  }
}
