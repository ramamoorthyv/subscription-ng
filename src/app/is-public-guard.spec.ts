import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { isPublicGuard } from './is-public-guard';

describe('isPublicGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => isPublicGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
