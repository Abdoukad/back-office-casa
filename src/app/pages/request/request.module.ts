import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ArchivedRequestsComponent } from './archived-requests/archived-requests.component';
import { ContactRequestsComponent } from './contact-requests/contact-requests.component';
import { RequestRoutingModule } from './request-routing.module';

const MODULES = [
 
  SharedModule,
  RequestRoutingModule
];
const COMPONENTS = [
  RequestComponent,
  ContactRequestsComponent,
  ArchivedRequestsComponent
]
@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...MODULES
  ]
})
export class RequestModule { }
