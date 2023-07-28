// Importation de NgModule d'Angular, qui est nécessaire pour créer un module
import { NgModule } from '@angular/core';

// Importation de CommonModule, qui contient des fonctionnalités courantes pour les composants
import { CommonModule } from '@angular/common';

// Importation de NgbModule, qui est un ensemble de composants Bootstrap pour Angular
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Importation de ContactRequestService, qui est probablement un service que vous avez écrit pour gérer les demandes de contact
import { ContactRequestService } from 'src/app/services/contact-request.service';

// On crée un tableau des modules que nous voulons importer et réexporter
const MODULES = [
  CommonModule, // Directives de base d'Angular comme ngIf, ngFor, etc.
  NgbModule, // Composants Bootstrap pour Angular
]

// Déclaration de notre module
@NgModule({
  imports: [
    // On importe les modules déclarés ci-dessus
    ...MODULES
  ],
  declarations: [], // Ici, nous pouvons déclarer les composants/directives spécifiques à ce module (actuellement vide)
  exports: [
    // On réexporte les modules pour que les modules qui importent SharedModule aient accès à CommonModule et NgbModule
    ...MODULES
  ],
  providers: [
    // On déclare que ContactRequestService est un fournisseur pour ce module,
    // ce qui signifie que tous les composants de ce module partageront la même instance de ce service
    ContactRequestService
  ]
})
// On exporte le module pour qu'il puisse être importé par d'autres modules
export class SharedModule { }
