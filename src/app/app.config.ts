import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import { routes } from './app.routes';
import {GAME_CONFIG} from './shared/models/config/game-config';
import {GameService} from './services/game';
import {MockGameService} from './services/services/mock-game-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideBrowserGlobalErrorListeners(),
    {provide: GameService, useClass: MockGameService},
    {provide: GAME_CONFIG, useValue: {apiBaseUrl: 'https://placeholder.example.com/api', defaultCategory: 'all'}}
    ]
};
