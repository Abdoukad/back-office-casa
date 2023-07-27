import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { authGuard } from "src/app/models/auth/auth.guard";
import { RequestComponent } from "./request.component";
import { ContactRequestsComponent } from "./contact-requests/contact-requests.component";
import { ArchivedRequestsComponent } from "./archived-requests/archived-requests.component";


const RequestRoutes: Routes = [
  // {
  //   path: 'requests', 
  //   component: RequestComponent, 
  //   canActivate: [authGuard], 
  //   children: [ 
  //     {
  //       path: '', 
  //       children: [ 
          { path: 'contact-requests', component: ContactRequestsComponent,  },
          { path: 'archived-requests', component: ArchivedRequestsComponent },
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(RequestRoutes)],
  exports: [RouterModule]
})
export class RequestRoutingModule {
}
