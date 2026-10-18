import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {GAME_CONFIG} from './shared/models/config/game-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: GAME_CONFIG,
      useValue: {apiBaseUrl: 'https://placeholder.example.com/api', defaultCategory: 'all',
      }
    }
    ]
};
