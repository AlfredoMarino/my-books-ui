import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  APP_TITLE: string = "MyBooks";
  isSearchComponentDisplayed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearchComponent(): void {
    this.isSearchComponentDisplayed = !this.isSearchComponentDisplayed;
  }
}
