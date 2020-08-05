import {Author} from './author.model';
import {Category} from './category.model';

export interface Book {
  bookId: number;
  title: string;
  subtitle: string;
  description: string;
  authors: Author[];
  publicationDate: Date;
  categories: Category[];
  image: string;
  isbn10: string;
  isbn13: string;
  googleId: string;
}
