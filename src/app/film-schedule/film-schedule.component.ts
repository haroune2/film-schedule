import { Component } from '@angular/core';

@Component({
  selector: 'app-film-schedule',
  templateUrl: './film-schedule.component.html',
  styleUrl: './film-schedule.component.css'
})
export class FilmScheduleComponent {

  
  searchText: string = '';
  dateFilter: string = '';
  schedule = [
    { title: 'Inception', director: 'Christopher Nolan', date: '2024-06-01', time: '18:00' },
    { title: 'Parasite', director: 'Bong Joon-ho', date: '2024-06-01', time: '20:30' },
    { title: 'The Godfather', director: 'Francis Ford Coppola', date: '2024-06-02', time: '17:00' },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', date: '2024-06-02', time: '19:30' },
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', date: '2024-06-03', time: '18:00' },
    { title: 'Fight Club', director: 'David Fincher', date: '2024-06-03', time: '20:30' }
  ];


 

  filteredFilms() {
    return this.schedule.filter(film => {
      const matchesSearchText = film.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
                                film.director.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesDateFilter = this.dateFilter ? film.date === this.dateFilter : true;
      return matchesSearchText && matchesDateFilter;
    });
  }
}
