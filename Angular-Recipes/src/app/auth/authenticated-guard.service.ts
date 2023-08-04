import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticatedGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authService.user.pipe(
      map((user) => {
        const isAuthenticated = !!user;
        console.log(isAuthenticated);

        if (isAuthenticated) {
          return this.router.navigate(['./']);
        } else {
          return true;
        }
      })
    );
  }
}
