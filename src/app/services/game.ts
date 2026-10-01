import {computed, effect, Service, signal} from '@angular/core';
import {Game} from '../shared/models/game';
@Service({})
export class GameService{
  private game=signal<Game[]>([]);
  gameList=this.game.asReadonly();
  Ownership=computed(()=>
    this.gameList().filter(b=>b.isOwned)
  );
  gameCount=computed(()=> this.gameList().length);
  constructor() {
    effect(()=>{
      console.log('Game Count is now',this.gameList);
    })
  }
  gameItems=signal<string[]>(['DeadLock','Marvel Rivals']);
  increment(newItem: string){
    this.gameItems.update(list=>[...list, newItem]);
  }
}
