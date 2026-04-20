import { CanDeactivateFn } from '@angular/router';

export const isPublicGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  return !localStorage.getItem('authToken');
};
