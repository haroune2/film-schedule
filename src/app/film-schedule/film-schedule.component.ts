import { Component } from '@angular/core';
import { Film, FilmService } from '../film.service';

@Component({
  selector: 'app-film-schedule',
  templateUrl: './film-schedule.component.html',
  styleUrl: './film-schedule.component.css'
})
export class FilmScheduleComponent {

  
 

  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe((data: Film[]) => {
      this.films = data;
    });
  }
}
