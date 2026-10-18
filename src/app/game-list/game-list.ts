import {Component,inject, Input} from '@angular/core';
import {GameListItem} from '../game-list-item/game-list-item';
import {GameEvents} from '../shared/models/game-events';
import {GameService} from '../services/game';
@Component({
  imports: [GameListItem],
  selector: 'app-game-list',
  styleUrl: './game-list.css',
  templateUrl: 'game-list.html',
})
export class GameList {
  private gameService=inject(GameService)
  gameList=this.gameService.filteredGames
  completion=this.gameService.completionRate
  onOpenGame(event: GameEvents): void {
    this.gameService.removeItem(event.id);
  }
}
