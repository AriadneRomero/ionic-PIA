import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
    children: [
      {
        path: 'movies',
        loadChildren: () => import('./movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../main/profile/profile.module').then(m => m.ProfilePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule { }
