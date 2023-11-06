import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => 
      import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => 
      import('./pages/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
