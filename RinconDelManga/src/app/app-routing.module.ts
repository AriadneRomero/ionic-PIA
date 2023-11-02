import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mangas',
    pathMatch: 'full'
  },
  {
    path: 'mangas',
    loadChildren: () => import('./pages/mangas/mangas.module').then( m => m.MangasPageModule)
  },
  {
    path: 'manga-details',
    loadChildren: () => import('./pages/manga-details/manga-details.module').then( m => m.MangaDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
