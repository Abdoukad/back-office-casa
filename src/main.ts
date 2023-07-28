// Importation de la fonction 'platformBrowserDynamic' depuis la bibliothèque Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importation de votre module racine (AppModule) de l'application
import { AppModule } from './app/app.module';

// La méthode 'bootstrapModule' initialise l'application en utilisant le module racine
// (dans ce cas, AppModule).
// 'platformBrowserDynamic().bootstrapModule(AppModule)' indique à Angular de démarrer l'application avec 'AppModule' comme module racine.
platformBrowserDynamic().bootstrapModule(AppModule)
    // En cas d'erreur lors du démarrage de l'application, l'erreur sera affichée dans la console
    .catch(err => console.error(err));
