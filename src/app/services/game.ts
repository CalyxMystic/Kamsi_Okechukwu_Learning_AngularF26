import {computed, effect, inject, Injectable,signal} from '@angular/core';
import {Game} from '../shared/models/game';
import {GAME_CONFIG} from '../shared/models/config/game-config';

@Injectable({providedIn: 'root'})

export class GameService{
  private config=inject(GAME_CONFIG)
  //Signals
  private game=signal<Game[]>([])
  gameList=this.game.asReadonly()
  //Method
  ownership=computed(()=>
    this.gameList().filter(game=>game.isOwned)
  )
  gameCount=computed(()=>
    this.gameList().length);
  //Methods
  completionRate = computed(() => {
    let total = this.gameList().length;
    if (total === 0) return '0%';
    return `${Math.round((this.ownership().length / total) * 100)}%`;
  })
  filteredGames = computed(() => {
    let category=this.config.defaultCategory;
    let games=this.gameList();
    return category === 'all' ? games : games.filter(
      game=> game.genre === category)
  })
  constructor() {
    effect(()=>{
      console.log('Game Count is now',this.gameList())
    })
  }
  increment(g: Game){
    this.game.update(list=>[...list, g])
  }
  removeItem(id:number){
    this.game.update(
      list=> list.filter(i => i.id !==id))
  }
}
