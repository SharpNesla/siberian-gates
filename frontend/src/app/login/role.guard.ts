import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return  this.authenticationService.CurrentEmployee
      .pipe(map(currentUser => {
          if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.Role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['dashboard']);
              return false;
            }

            // authorised so return true
            return true;
          }
          // not logged in so redirect to login page with the return url
          this.router.navigate([''], {queryParams: {returnUrl: state.url}});
          return false;
        }
      ));
  }
}
