import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list';
import { editGuard } from './services/edit.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'games', pathMatch: 'full' },
  {path: 'games', component: GameList },
  {path: 'games/add', loadComponent: () => import('./game-form/game-form').then(m => m.GameForm)},
  {path: 'games/edit/:id', loadComponent: () => import('./game-form/game-form').then(m => m.GameForm), canActivate: [editGuard]},
  {path: 'games/:id', loadComponent: () => import('./game-detail/game-detail').then(m => m.GameDetail)},
  {path: '**', loadComponent: () => import('./page-not-found/page-not-found').then(m => m.PageNotFound)},
  {path: 'games', component: GameList},
  {path: 'games', loadChildren: () => import('./game.routes')}
];
