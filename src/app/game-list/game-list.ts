import { Component } from '@angular/core';
import {GameListItem} from '../game-list-item/game-list-item';
import {Game} from '../shared/models/game';

@Component({
  imports: [
    GameListItem
  ],
  selector: 'app-game-list',
  styleUrl: './game-list.css',
  templateUrl: './game-list.html',
})
export class GameList {
  gameCard:Game[]=[
    {id:1, name: "Clair Obscur:Expedition 33", genre: "Role-playing", copiesSold: "Over 8 million", isOwned: false},
    {id:2, name:"Sword Of The Sea", genre: "Action-Adventure",copiesSold:"Over 36,00",isOwned:false},
    {id:3, name:"Persona 3", genre:"Action-Adventure",copiesSold:"Over 3 million",isOwned:false},
    {id:4, name:"Dead Cells", genre:"2D Metriodvania",copiesSold:"Over 10 million",isOwned:true}
  ]
}
