import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ContactRequestService } from 'src/app/services/contact-request.service';
import { ContactRequest } from 'src/app/models/contact-request.model';

@Component({
  selector: 'app-contact-requests',
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.css'],
})
export class ContactRequestsComponent implements OnInit {
  // Tableau pour stocker les demandes de contact
  contactRequests: ContactRequest[] = [];

  // Injection du service ContactRequestService
  constructor(private contactRequestService: ContactRequestService) { }

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    this.loadContactRequests();
  }

  // Méthode pour charger les demandes de contact
  loadContactRequests(): void {
    this.contactRequestService.getAllContactRequests().subscribe(contactRequests => {
      console.log('Contact Requests:', contactRequests);
      this.contactRequests = contactRequests;
    });
  }

  // Méthode pour supprimer une demande de contact par son identifiant
  deleteRequest(id: number): void {
    this.contactRequestService.deleteById(id).subscribe(() => {
      this.loadContactRequests();
    });
  }

  // Méthode pour archiver une demande de contact par son identifiant
  archiveRequest(id: number): void {
    this.contactRequestService.archiveById(id).subscribe(() => {
      this.loadContactRequests();
    });
  }
}
