import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

// Le décorateur @NgModule permet de définir un module
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule, // Ce module fournit les directives de base d'Angular pour les templates
        AuthRoutingModule // Module de routage spécifique pour les routes d'authentification
    ]
})
export class AuthModule { } // Exportation de la classe AuthModule pour qu'elle puisse être utilisée dans d'autres parties de l'application
