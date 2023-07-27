import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactRequestService } from 'src/app/services/contact-request.service';

const MODULES = [
  CommonModule,
  NgbModule, // Module pour les fonctionnalités de la bibliothèque ng-bootstrap
]

@NgModule({
  imports: [    
    ...MODULES
  ],
  declarations: [],
  exports: [
    ...MODULES
  ],
  providers: [ContactRequestService]
})
export class SharedModule { }
