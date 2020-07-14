import {Book} from '@core/models/book.model';
import {Country} from '@core/models/country.model';
import {Region} from '@core/models/region.model';

export interface Library {
  book: Book;
  startDate: Date;
  endDate: Date;
  initialCountry: Country;
  initialRegion: Region;
  finalCountry: Country;
  finalRegion: Region;
  rating: number;
  note: string;
  creationDate: Date;
}
