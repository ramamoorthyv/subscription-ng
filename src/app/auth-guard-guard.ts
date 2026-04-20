import { CanActivateFn } from '@angular/router';
import { AuthApiService } from './auth-api-service';

export const isAuthenticated: CanActivateFn = (route, state) => {

  const token = localStorage && localStorage.getItem('authToken');
  if (token) {
    return true;
  } else {
    
    return false;
  }
};
