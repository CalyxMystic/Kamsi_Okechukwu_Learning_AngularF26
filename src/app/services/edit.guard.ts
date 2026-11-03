import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {EditGuard} from './editGuard';

export const editGuard: CanActivateFn = (route, state) => {
  const guardService = inject(EditGuard);
  const router = inject(Router);
  if (guardService.guardEnabled()) {
    return router.createUrlTree(['/games']);
  }
  return true;
};
