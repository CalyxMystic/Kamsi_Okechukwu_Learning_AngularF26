import {InjectionToken} from '@angular/core';

export interface GameConfig {
  apiBaseUrl:string;
  apiHost:string;
  apiKey:string;
  defaultCategory:string;
}
export const GAME_CONFIG= new InjectionToken<GameConfig>('game.config');
