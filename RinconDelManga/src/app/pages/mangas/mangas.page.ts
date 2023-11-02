import { Component, OnInit } from '@angular/core';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.page.html',
  styleUrls: ['./mangas.page.scss'],
})
export class MangasPage implements OnInit {
  constructor(private mangaService: MangaService) { }

  ngOnInit() {
  }

}
