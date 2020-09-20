import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Library } from '@core/models/library.model';
import { environment } from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpClient: HttpClient) { }

  getLibrariesByPersonId(personId: number): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${environment.myBooksServiceApiURL}/persons/${personId}/libraries`);
  }

  createLibrary(personId: number, googleId: string, library: Library): Observable<Library> {
    return this.httpClient.post<Library>(`${environment.myBooksServiceApiURL}/persons/${personId}/libraries/${googleId}`, library);
  }

  deleteLibrary(personId: number, bookId: number) {
    return this.httpClient.delete(`${environment.myBooksServiceApiURL}/persons/${personId}/libraries/${bookId}`);
  }
}
