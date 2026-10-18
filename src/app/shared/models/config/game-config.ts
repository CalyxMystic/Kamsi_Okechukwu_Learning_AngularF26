import {InjectionToken} from '@angular/core';

export interface GameConfig {
  apiBaseUrl:string;
  defaultCategory:string;
}
export const GAME_CONFIG= new InjectionToken<GameConfig>('game.config');
