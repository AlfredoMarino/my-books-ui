import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from '@shared/components/layout/layout.component';
import {PageNotFoundComponent} from '@shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'books',
    component: LayoutComponent
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
