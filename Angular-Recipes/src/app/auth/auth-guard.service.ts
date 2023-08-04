import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  isAuthenticated: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const isAuthenticated = !!user;
        if (isAuthenticated) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth']);
        }
      })
    );
  }
}
