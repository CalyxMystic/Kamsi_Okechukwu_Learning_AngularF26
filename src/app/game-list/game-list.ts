import {Component,inject} from '@angular/core';
import {GameListItem} from '../game-list-item/game-list-item';
import {GameEvents} from '../shared/models/game-events';
import {GameService} from '../services/game';
import {Router, RouterLink} from '@angular/router';
import {LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
@Component({
  imports: [GameListItem, RouterLink, TitleCasePipe, UpperCasePipe, LowerCasePipe, SlicePipe],
  selector: 'app-game-list',
  styleUrl: './game-list.css',
  templateUrl: 'game-list.html',
})
export class GameList {
  private gameService=inject(GameService)
  private router=inject(Router)

  gameList=this.gameService.filteredGames
  completion=this.gameService.completionRate

  onOpenGame(event: GameEvents): void {
    this.router.navigate(['/games',event.id])
  }
}
