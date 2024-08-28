import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authDepartGuard } from './auth-depart.guard';

describe('authDepartGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authDepartGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
