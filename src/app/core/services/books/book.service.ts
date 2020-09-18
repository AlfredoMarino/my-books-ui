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

  constructor(private http: HttpClient) { }

  getBooksByPersonId(personId: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.myBooksServiceApiURL}/persons/${personId}/libraries/books`);
  }

  getBook(bookId: string) {
    return this.http.get<Book>(`${environment.myBooksServiceApiURL}/books/${bookId}`)
      .pipe(
        retry(1)
      );
  }

  getBooksByName(name: string): Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.myBooksServiceApiURL}/books?name=${name}`);
  }

}
