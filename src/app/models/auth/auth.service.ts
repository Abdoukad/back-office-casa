// Importation des modules nécessaires à partir des packages Angular et rxjs
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

// @Injectable indique que cette classe est un service qui peut être injecté dans d'autres parties de l'application
@Injectable({
  providedIn: 'root', // Ce service est fourni à l'échelle de l'application (c'est un singleton)
})
export class AuthService {
  // Variable pour suivre l'état de connexion de l'utilisateur. Faux par défaut (l'utilisateur n'est pas connecté)
  isLoggedIn = false;

  // Variable pour stocker l'URL vers laquelle l'utilisateur doit être redirigé après s'être connecté
  redirectUrl: string | null = null;

  // Cette méthode simule une connexion en retournant un Observable qui émet "true" après un délai
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1), // Ajoute un délai de 1ms
      tap(() => this.isLoggedIn = true) // Une fois l'observable résolu, défini la valeur de isLoggedIn à vrai, signifiant que l'utilisateur est connecté
    );
  }

  // Cette méthode déconnecte l'utilisateur en définissant isLoggedIn à faux
  logout(): void {
    this.isLoggedIn = false;
  }
}
