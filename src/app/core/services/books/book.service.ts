import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '@core/models/book.model';
import { retry } from 'rxjs/operators';
import { environment } from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getBooksByName(name: string): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${environment.myBooksServiceApiURL}/books?name=${name}`);
  }

}
