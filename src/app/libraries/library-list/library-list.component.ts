import { Component, OnInit } from '@angular/core';
import {LibraryService} from '@core/services/library.service';
import {Library} from '@core/models/library.model';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  libraries: Library[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibrariesByPersonId(11).subscribe(libraries => this.libraries = libraries);
  }

}
