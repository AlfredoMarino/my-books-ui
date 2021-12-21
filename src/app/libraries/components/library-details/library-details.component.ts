import { Component, Input, OnInit } from '@angular/core';
import { Author } from '@core/models/author.model';
import { Library } from '@core/models/library.model';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.css']
})
export class LibraryDetailsComponent implements OnInit {

  @Input()
  librarySelected: Library;

  ngOnInit(): void { }

  displayAuthors(authors: Author[]): string {
    return authors.map(author => author.name).join(", ");
  }
}
