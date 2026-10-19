import {Component, computed, inject, input} from '@angular/core';
import {GameService} from '../services/game';
import {Router} from '@angular/router';

@Component({
  imports: [],
  selector: 'app-game-detail',
  styleUrl: './game-detail.css',
  templateUrl: './game-detail.html',
})
export class GameDetail {
  id=input.required<string>()

  private gameService=inject(GameService)
  private router=inject(Router)

  game=computed(()=>
  this.gameService.gameList().find(g=> g.id === Number(this.id())))

  goBack(): void{
    this.router.navigate(['/games'])
  }
}
