import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactRequest } from '../models/contact-request.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {

  // URL de base de l'API des demandes de contact
  private apiUrl = environment.api_url+'/contacts';

  // Injection de dépendance pour HttpClient
  constructor(private http: HttpClient) { }

  // Récupère toutes les demandes de contact non archivées
  getAllContactRequests(): Observable<ContactRequest[]> {
    return this.http.get<ContactRequest[]>(this.apiUrl);
  }

  // Soumet une nouvelle demande de contact
  submitContactRequest(contactRequest: ContactRequest): Observable<any> {
    return this.http.post(this.apiUrl, contactRequest);
  }

  // Archive une demande de contact par ID
  archiveById(id: number): Observable<any> {
    const url = `${this.apiUrl}/archive/${id}`;
    return this.http.post(url, {});
  }

  // Récupère toutes les demandes de contact archivées
  getAllArchivedContactRequests(): Observable<ContactRequest[]> {
    const url = `${this.apiUrl}/archived`;
    return this.http.get<ContactRequest[]>(url);
  }

  // Supprime une demande de contact par ID
  deleteById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
