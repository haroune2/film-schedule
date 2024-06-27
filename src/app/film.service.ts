import { Injectable } from '@angular/core';

// src/app/film.service.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Film {
  id?: number;
  title: string;
  director: string;
  date: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'https://didactic-space-carnival-9vvjwgrpv6jcrw4-8080.app.github.dev/films';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.apiUrl, film);
  }

  deleteFilm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
