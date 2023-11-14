import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MovieService } from 'src/app/services/movie.service';
import { UtilsService } from 'src/app/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies:any = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) { }
  
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  pages = [
    {title: 'Inicio', url: '/movies', icon:'home-outline'},
    {title: 'Perfil', url: '../main/profile', icon:'person-outline'}
  ]
  
  router = inject(Router);
  currentPath: string = '';

  ngOnInit() {
    this.router.events.subscribe((event:any) => {
      if(event?.url) this.currentPath = event.url;
    })
    this.loadMovies();
  }

  signOut() {
    this.firebaseSvc.signOut();
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }

  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();


    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies.push(...res.results);
      console.log(res);

      event?.target.complete();
      if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
