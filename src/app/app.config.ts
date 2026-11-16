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
    {provide: GAME_CONFIG,
      useValue: {apiBaseUrl: 'https://rapidapi.com',apiHost: 'free-to-play-games-database.p.rapidapi.com', apiKey: '0304c92c7bmsh916d575b37343bdp1a0209jsn3ba09f8d929a', defaultCategory: 'all'}
    }]
};
