import {Author} from './author.model';
import {Category} from './category.model';

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
