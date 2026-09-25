import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Game} from './shared/models/game';
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './game-card.scss',
  templateUrl: './app.html',
})
export class App {
  gameList: Game[] = [
    {id: 1, name: "Uncharted 4: A thief's End", genre: "Action-adventure", copiesSold: " Over 18 million", isOwned: true},
    {id: 2, name: "God of War Ragnarok", genre: "Action-adventure", copiesSold: "Over 15 million", isOwned: false},
    {id: 3, name: "Nine Sols", genre: "2D Action-platformer / Metroidvania", copiesSold: "Over 800,000", isOwned: false},
    {id: 4, name: "Black Myth Wukong", genre: "Action RPG", copiesSold: "Over 30 million", isOwned: false},
    {id: 5, name: "Cyberpunk 2077:Phantom Liberty", genre: "Action RPG", copiesSold: "Over 15 million", isOwned: true},
    {id: 6, name: "Prince of Persia: The Lost Crown", genre: "Action-adventure / Metroidvania", copiesSold: "Over 1.3 million", isOwned: true},
  ]
}
