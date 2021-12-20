import { Component, OnInit } from '@angular/core';
import { LibraryService } from '@core/services/libraries/library.service';
import { Library } from '@core/models/library.model';
import { environment } from "@environments/environment";

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  libraries: Library[];
  librarySelected: Library;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibrariesByPersonId(environment.personId).subscribe(libraries => this.libraries = libraries);
  }

  showLibrarySelected(librarySelected: Library): void {
    this.librarySelected = librarySelected;
  }

}
