import { AdminComponent } from "./admin/admin.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "src/app/pages/layout/auth/auth.guard";
import { ContactRequestsComponent } from "../request/contact-requests/contact-requests.component";
import { ArchivedRequestsComponent } from "../request/archived-requests/archived-requests.component";
import { RequestComponent } from "../request/request.component";

// Définition des routes spécifiques pour la section d'administration
const adminRoutes: Routes = [
  {
    path: 'admin', // Chemin d'accès pour atteindre l'interface d'administration
    component: AdminComponent, // Composant à charger lorsqu'on accède au chemin 'admin'
    canActivate: [AuthGuard], // Utilisation de la garde d'authentification pour protéger la route.
    children: [ // Définition des sous-routes de la route 'admin'
      {
        path: '', // Chemin par défaut sous 'admin' (ex: 'admin/')
        children: [ // Sous-routes du chemin par défaut
          { path: '', component: RequestComponent },
          // Sous-route pour les demandes de contact. Charge le composant ContactRequestsComponent lorsqu'on accède à 'admin/contact-requests'
          { path: 'contact-requests', component: ContactRequestsComponent },
          // Sous-route pour les demandes archivées. Charge le composant ArchivedRequestsComponent lorsqu'on accède à 'admin/archived-requests'
          { path: 'archived-requests', component: ArchivedRequestsComponent },
        ]
      }
    ]
  }
];


// Déclaration du module de routage pour l'administration
@NgModule({
  imports: [
    // Importation du RouterModule avec les routes spécifiques à l'administration
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    // Exportation du RouterModule pour permettre à d'autres modules de l'application d'utiliser ces routes
    RouterModule
  ]
})
// Classe du module de routage spécifique à l'administration
export class AdminRoutingModule { }
