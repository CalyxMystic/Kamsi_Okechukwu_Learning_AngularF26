import {Component, computed, inject, input, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../services/game';
import {Router} from '@angular/router';

@Component({
  imports: [],
  selector: 'app-game-detail',
  styleUrl: './game-detail.css',
  templateUrl: './game-detail.html',
})
export class GameDetail implements OnInit,OnDestroy{
  private openedAt=0;
  ngOnInit(): void {
    this.openedAt=Date.now();
    const id=Number();
    const selectedGame=this.gameService.gameList().find(
      game=>game.id ===id
    );
    console.log(`[lifecycle] opened: ${selectedGame?.title ?? 'Unknown game'}`)
  }
  ngOnDestroy(): void {
    const selectedGame=this.game();
    const timeSpent=Math.round(
      (Date.now()-this.openedAt)/1000
    );
    console.log(`[lifecycle] closed:${'Unkown game'} after ${timeSpent} seconds`)
  }
  goBack():void{
    this.router.navigate(['/games']);
  }
  id=input.required<string>()

  private gameService=inject(GameService)
  private router=inject(Router)

  game=computed(()=>
    this.gameService.gameList().find(g=> g.id === Number(this.id())))
}
