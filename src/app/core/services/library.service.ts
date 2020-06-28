import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Library} from '@core/models/library.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private HOST = 'http://192.168.99.100:5000/v1';

  constructor(private http: HttpClient) { }

  getLibrariesByPersonId(personId: number): Observable<Library[]> {
    return this.http.get<Library[]>(`${(this.HOST)}/persons/${personId}/libraries`);
  }
}
