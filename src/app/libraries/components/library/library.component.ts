import { Component, Input, OnInit } from '@angular/core';
import { Library } from '@core/models/library.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input() library: Library;

  constructor() { }

  ngOnInit(): void {
    console.log(this.library);
  }

}
