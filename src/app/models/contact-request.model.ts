export class ContactRequest {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  sendingDate: string;

  // Constructeur de la classe ContactRequest, initialise les propriétés avec des valeurs par défaut
  constructor() {
    this.id = 0;
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.subject = '';
    this.message = '';
    this.sendingDate = '';
  }
}
