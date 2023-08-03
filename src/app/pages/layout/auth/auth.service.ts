import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // Une variable privée pour stocker le token d'authentification de l'utilisateur
    private token!: string;

    // Une méthode pour simuler une connexion et stocker un faux token
    login() {
        this.token = 'MyFakeToken';
    }

    // Une méthode pour récupérer le token d'authentification
    getToken(): string {
        return this.token;
    }

    // Un getter qui renvoie vrai si un token est stocké, faux sinon
    get isLoggedIn(): boolean {
        return !!this.token;
    }
}
