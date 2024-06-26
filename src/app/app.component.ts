import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-training-angular';
  films = [
    { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { title: 'Parasite', director: 'Bong Joon-ho', year: 2019 },
    { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
    { title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994 }
  ];
}
