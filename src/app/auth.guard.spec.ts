import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  const executeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = TestBed.inject(AuthService);
    const router = TestBed.inject(Router);
    const guard = new AuthGuard(authService, router);
    const mockRoute = {
      data: {},
      firstChild: route
    } as ActivatedRouteSnapshot;
    return guard.canActivate(mockRoute, state);
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});