import {computed, effect, Service, signal} from '@angular/core';
import {Game} from '../shared/models/game';
@Service({})
export class GameService{
  private game=signal<Game[]>([
    {id:1, name: "Clair Obscur:Expedition 33", genre: "Role-playing", copiesSold: "Over 8 million", isOwned: false},
    {id:2, name:"Sword Of The Sea", genre: "Action-Adventure",copiesSold:"Over 36,00",isOwned:false},
    {id:3, name:"Persona 3", genre:"Action-Adventure",copiesSold:"Over 3 million",isOwned:false},
    {id:4, name:"Dead Cells", genre:"2D Metriodvania",copiesSold:"Over 10 million",isOwned:true}
  ]);
  gameList=this.game.asReadonly();
  Ownership=computed(()=>
    this.gameList().filter(b=>b.isOwned)
  );
  gameCount=computed(()=> this.gameList().length);
  constructor() {
    effect(()=>{
      console.log('Game Count is now',this.gameList());
    })
  }
  increment(g: Game){
    this.game.update(list=>[...list, g]);
  }
  removeItem(id:number){
    this.game.update(
      list=> list.filter(i => i.id !==id));
  }
  completionRate = computed(() => {
    let total = this.gameList().length;
    if (total === 0) return '0%';
    return `${Math.round((this.Ownership().length / total) * 100)}%`;
  });
}
