import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

// Importation du guard qui s'assure que l'utilisateur est authentifié
import { AuthGuard } from "src/app/pages/layout/auth/auth.guard";

import { RequestComponent } from "./request.component";
import { ContactRequestsComponent } from "./contact-requests/contact-requests.component";
import { ArchivedRequestsComponent } from "./archived-requests/archived-requests.component";

// Définition d'un tableau de routes pour ce module. Chaque route est un objet qui associe un chemin ('path') à un composant
// et peut également déclarer des gardes (canActivate).
// Ici, on a deux routes : '/contact-requests' et '/archived-requests' qui sont protégées par le AuthGuard,
// ce qui signifie que l'utilisateur doit être authentifié pour y accéder.
const RequestRoutes: Routes = [
    { path: 'contact-requests', component: ContactRequestsComponent, canActivate: [AuthGuard] },
    { path: 'archived-requests', component: ArchivedRequestsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    // On enregistre ces routes dans le module de routage de l'application en utilisant la méthode forChild de RouterModule.
    // forChild est utilisé pour les routes des modules qui ne sont pas le module principal de l'application.
    imports: [RouterModule.forChild(RequestRoutes)],

    // On exporte RouterModule pour que les routes déclarées ici soient disponibles dans d'autres parties de l'application.
    exports: [RouterModule]
})
export class RequestRoutingModule { // On exporte cette classe pour pouvoir l'importer dans d'autres fichiers.
}
