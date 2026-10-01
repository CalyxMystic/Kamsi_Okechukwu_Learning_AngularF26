import {Service, signal} from '@angular/core';
import {Game} from '../shared/models/game';
@Service({})
export class GameService{
  private game=signal<Game[]>([]);
  gameList=this.game.asReadonly();
}
