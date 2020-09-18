import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { BookListComponent } from '@books/book-list/book-list.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./libraries/libraries.module').then(m => m.LibrariesModule)
      },
      {
        path: 'books/:name',
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
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
