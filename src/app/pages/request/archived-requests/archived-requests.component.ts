import { Component, OnInit } from '@angular/core';
import { ContactRequest } from 'src/app/models/contact-request.model';
import { ContactRequestService } from 'src/app/services/contact-request.service';

@Component({
  selector: 'app-archived-requests',
  templateUrl: './archived-requests.component.html',
  styleUrls: ['./archived-requests.component.css']
})
export class ArchivedRequestsComponent implements OnInit {
  archivedRequests: ContactRequest[] = []; // Tableau des demandes de contact archivées

  // Injection du service ContactRequestService dans le constructeur
  constructor(private contactRequestService: ContactRequestService) { }

  // Méthode ngOnInit appelée à l'initialisation du composant
  ngOnInit(): void {
    this.loadArchivedRequests(); // Chargement des demandes archivées
  }

  // Méthode pour charger les demandes de contact archivées
  loadArchivedRequests(): void {
    // Appel à la méthode getAllArchivedContactRequests() du service
    this.contactRequestService.getAllArchivedContactRequests().subscribe(archivedRequests => {
      console.log('Archived Requests:', archivedRequests); // Affichage des demandes archivées dans la console
      this.archivedRequests = archivedRequests; // Affectation des demandes archivées au tableau
    });
  }
}
