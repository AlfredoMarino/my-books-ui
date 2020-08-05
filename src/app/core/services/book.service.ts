import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '@core/models/book.model';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private HOST = 'http://192.168.99.100:5000/v1';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBooksByPersonId(personId: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${(this.HOST)}/persons/${personId}/libraries/books`);
  }

  getBook(bookId: string) {
    return this.http.get<Book>(`${(this.HOST)}/books/${bookId}`)
      .pipe(
        retry(1)
      );
  }

  getBooksByName(name: string): Observable<Book[]>{
    return this.http.get<Book[]>(`${(this.HOST)}/books?name=${name}`);
  }

}
