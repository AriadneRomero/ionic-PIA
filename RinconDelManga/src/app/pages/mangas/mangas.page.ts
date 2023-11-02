import { Component, OnInit } from '@angular/core';
import { LoadChildren } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.page.html',
  styleUrls: ['./mangas.page.scss'],
})
export class MangasPage implements OnInit {
  movies: any = [];
  currentPage = 1;

  constructor(private mangaService: MangaService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.mangaService.getMangas(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies = [...this.movies, ...res.results];
      console.log(res);
    });
  }
}
