// On importe les modules nécessaires pour le routing.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// On importe le composant LoginComponent, qui sera affiché quand l'utilisateur navigue vers la route '/login'
import { LoginComponent } from './login/login.component';

// On déclare un tableau de routes pour ce module.
// Chaque route est un objet qui associe un chemin ('path') à un composant.
// Ici, on a une seule route: quand l'utilisateur navigue vers '/login', on affiche le LoginComponent.
const routes: Routes = [
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        // On enregistre ces routes dans le module de routage de l'application en utilisant la méthode forChild de RouterModule.
        // forChild est utilisé pour les routes des modules qui ne sont pas le module principal de l'application.
        RouterModule.forChild(routes)
    ],
    exports: [
        // On exporte RouterModule pour que les routes déclarées ici soient disponibles dans d'autres parties de l'application.
        RouterModule
    ]
})
export class AuthRoutingModule {} // On exporte cette classe pour pouvoir l'importer dans d'autres fichiers.
