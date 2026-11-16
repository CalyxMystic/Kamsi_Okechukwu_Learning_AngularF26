import {inject, Injectable, signal} from '@angular/core';
import {Game} from '../shared/models/game';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {GAME_CONFIG} from '../shared/models/config/game-config';

@Injectable({providedIn: 'root'})
export class GameAPIService {
  private http=inject(HttpClient);
  private config=inject(GAME_CONFIG);
  private contents=signal<Game[]>([]);
  error=signal<string|null>(null);
  constructor() {this.load()};
  load() {
    const headers = new HttpHeaders({
      'x-rapidapi-key': this.config.apiKey,
      'x-rapidapi-host': this.config.apiHost
    });
    this.http.get<Game[]>(`${this.config.apiBaseUrl}/games`, {
      headers:headers,
      params:{
        platform:'browser',
        category:'mmorpg',
        'sort-by':'release-date'
      }
    }).subscribe({
      next: (list) => this.contents.set(list),
      error: () => this.error.set('Could not load data.'),
    });
  }
}
