import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search = new FormControl('');
  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  searchBook() {
    this.router.navigate(['books/', this.search.value]);
  }

}
