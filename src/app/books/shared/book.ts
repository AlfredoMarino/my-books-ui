import {Author} from './author';
import {Category} from './category';

export interface Book {
  idBook: number;
  title: string;
  subtitle: string;
  synopsis: string;
  author: Author;
  publicationDate: Date;
  category: Category;
  image: string;
  isbn10: number;
  isbn13: number;
  idGoogle: string;
}
