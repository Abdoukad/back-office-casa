import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root' //service  fourni au niveau racine de l'application, il est donc disponible partout dans l'application.
})
export class AuthGuard implements CanActivate { // AuthGuard implémente l'interface CanActivate de Angular Router.


  constructor(private authService: AuthService, private router: Router) {}

  // La méthode canActivate() détermine si une route peut être activée ou non.
  // Si cette méthode renvoie true, la navigation continue vers la route demandée.
  // Si elle renvoie false, la navigation vers la route est annulée.

  canActivate(
      route: ActivatedRouteSnapshot, // Informations sur la route à activer
      state: RouterStateSnapshot // Informations sur l'état du routeur
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Nous vérifions si l'utilisateur est connecté ou non grâce à la méthode isLoggedIn de AuthService.
    if (this.authService.isLoggedIn) {
      // Si l'utilisateur est connecté, nous autorisons la navigation vers la route demandée.
      return true;
    } else {
      // Si l'utilisateur n'est pas connecté, nous redirigeons vers la page de connexion et annulons la navigation vers la route demandée.
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
