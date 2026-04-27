import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthApiService } from './auth-api-service';

export const isAuthenticated: CanActivateFn = (route, state) => {
 
  const api = inject(AuthApiService);
  return api.isLoggedIn();  
};
