import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { BookListComponent } from '@books/book-list/book-list.component';
import { LibraryListComponent } from './libraries/library-list/library-list.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LibraryListComponent
      },
      {
        path: 'books',
        component: BookListComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
