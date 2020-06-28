import {Author} from './author.model';
import {Category} from './category.model';

export interface Book {
  bookId: number;
  title: string;
  subtitle: string;
  description: string;
  author: Author;
  publicationDate: Date;
  category: Category;
  image: string;
  isbn10: number;
  isbn13: number;
  googleId: string;
}
