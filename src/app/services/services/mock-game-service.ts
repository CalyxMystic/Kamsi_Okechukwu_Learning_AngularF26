import { Injectable, signal, computed } from '@angular/core';
import {Game} from '../../shared/models/game';

export class MockGameService {
  @Injectable({
    providedIn: 'root'
  })
  private game = signal<Game[]>([
    {
      id: 101,
      name: 'Mock Adventure',
      genre: 'Action-Adventure',
      copiesSold: 'Mock data',
      isOwned: true
    },
    {
      id: 102,
      name: 'Mock RPG',
      genre: 'Role-playing',
      copiesSold: 'Mock data',
      isOwned: false
    }
  ]);

  gameList = this.game.asReadonly();

  Ownership = computed(() =>
    this.gameList().filter(game => game.isOwned)
  );

  gameCount = computed(() => this.gameList().length);

  completionRate = computed(() => {
    const total = this.gameList().length;
    if (total === 0) return '0%';

    return `${Math.round(this.Ownership().length / total * 100)}%`;
  });

  filteredGames = computed(() => this.gameList());

  removeItem(id: number) {
    this.game.update(games => games.filter(game => game.id !== id));
  }

  increment(game: Game) {
    this.game.update(games => [...games, game]);
  }
}
