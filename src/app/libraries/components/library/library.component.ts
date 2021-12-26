import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Library } from '@core/models/library.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input()
  library: Library;

  @Output()
  librarySelected = new EventEmitter<Library>();

  constructor() { }

  ngOnInit(): void { }

  onShowDetails() {
    this.librarySelected.emit(this.library)
  }
}
