import { Component,input,output } from '@angular/core';
import {Game} from '../shared/models/game';
import {GameEvents} from '../shared/models/game-events';

@Component({
  selector: 'app-game-list-item',
  styleUrl: '../game-card.scss',
  templateUrl: './game-list-item.html',
})
export class GameListItem {
  game=input.required<Game>();
  openGame=output<GameEvents>();

  handleClick():void{
    this.openGame.emit({id:this.game().id,
      action:'openGame'});
  }
}
