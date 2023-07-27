import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactRequestsComponent } from './pages/request/contact-requests/contact-requests.component';
import { ArchivedRequestsComponent } from './pages/request/archived-requests/archived-requests.component';
import { AppComponent } from './app.component';

// Importation des composants pour les routes

// Définition des routes de l'application
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'request', loadChildren: () => import('./pages/request/request.module').then(m => m.RequestModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration du RouterModule avec les routes définies
  exports: [RouterModule] // Exportation du RouterModule pour être utilisé dans AppModule
})
export class AppRoutingModule { }
