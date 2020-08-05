import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryListComponent } from './components/library-list/library-list.component';

const routes: Routes = [
    {
        path: '',
        component: LibraryListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class LibrariesRoutingModule {}