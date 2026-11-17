import { Routes } from '@angular/router';
import { editGuard } from './services/edit.guard';

const contentRoutes: Routes = [
  {path: 'add', loadComponent: () => import('./game-form/game-form').then(m => m.GameForm)},
  {path: 'edit/:id', loadComponent: () => import('./game-form/game-form').then(m => m.GameForm), canActivate: [editGuard]}
];

export default contentRoutes;
