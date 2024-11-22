import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  promedio: number = 0;
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.ratingPromedio();
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

  totalEpisodios(): number {
    return this.animes.reduce((num, anime) => num + anime.episode, 0);
  }

  ratingPromedio(): number {
    const totalRatings = this.animes.reduce((num, ratings) => num + ratings.Rating, 0);
    this.promedio = totalRatings/this.animes.length
    const promedioRedondeado = parseFloat(this.promedio.toFixed(2));
    return promedioRedondeado
  }

}
