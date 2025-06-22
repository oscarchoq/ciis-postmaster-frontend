export interface EventInscription {
  id: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  price: string;
}

export interface InscriptionForm {
  documentType: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  voucher: File | null;
}