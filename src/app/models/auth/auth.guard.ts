// Importation des dépendances nécessaires
import {inject} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';

// Déclaration de la fonction de garde d'authentification
export const authGuard = () => {
  // Injection des services AuthService et Router
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si l'utilisateur est déjà connecté, renvoie true pour permettre la navigation
  if (authService.isLoggedIn) {
    return true;
  }

  /* Code commenté qui vérifie les credentials de l'utilisateur
  this.isLoggedIn = this._service.checkCredentials();
  */

  // Recherche le code dans l'URL, possiblement lié à une authentification OAuth
  let i = window.location.href.indexOf('code');

  console.log("OOOOOOOOOOOK")
  console.log(window.location.href)

  /* Code commenté qui semble récupérer le token d'authentification de l'URL
  if(!this.isLoggedIn && i != -1) {
    this._service.retrieveToken(window.location.href.substring(i + 5));
  }*/

  /* Code commenté qui redirige vers la page de login
  window.location.href ='http://localhost:8080/login'
  */

  // Tentative de connexion de l'utilisateur
  authService.login();

  // Renvoie true pour permettre la navigation
  return true;

  // Code commenté qui redirige vers la page de login
  /*return router.parseUrl('login');*/
};
