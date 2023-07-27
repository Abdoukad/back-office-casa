import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Import des modules de routage, composants et services HTTP
import { AppRoutingModule } from './app-routing.module'; // Module de routage
import { AppComponent } from './app.component'; // Composant principal de l'application
import { HttpClientModule } from "@angular/common/http"; // Module pour les services HTTP
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // Module pour les animations
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Modules pour la gestion des formulaires
import { AdminRoutingModule } from './pages/admin/admin-routing.module';
import { AdminModule } from './pages/admin/admin.module';
import { SharedModule } from './pages/shared/shared/shared.module';
import { HeaderComponent } from './pages/layout/header/header.component';

const COMPENENTS = [
  AppComponent, // Composant principal de l'application
  HeaderComponent
];
const MODULES = [  
  BrowserModule, // Module de base pour l'application Web
  AppRoutingModule, // Module de routage
  HttpClientModule, // Module pour les services HTTP
  BrowserAnimationsModule, // Module pour les animations
  FormsModule, // Module pour la gestion des formulaires
  ReactiveFormsModule, // Module pour les formulaires réactifs,
  // NgbModule, // Module pour les fonctionnalités de la bibliothèque ng-bootstrap
  RouterModule, // Module de routage,
  AdminModule,
  AdminRoutingModule,
  SharedModule
];

@NgModule({
  declarations: [
    ...COMPENENTS
  ],
  imports: [
    ...MODULES
  ],
  providers: [], // Liste des services à injecter dans l'application
  bootstrap: [AppComponent] // Indique le composant de démarrage de l'application
})
export class AppModule { }
