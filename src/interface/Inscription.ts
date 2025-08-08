export interface InscriptionForm {
  tipoDocumento: string
  numeroDocumento: string
  nombres: string
  apellidos: string
  email: string
  celular: string
  universidad: string
  carrera: string
  password: string
  confirmPassword: string
  voucher: File | null
}

// Esto es propio del backend 
export interface InscriptionResponse {
  id: number;
  nationality: string;
  dni: string;
  role: number;
  email: string;
  name: string;
  phone: string;
  lastname: string;
  studycenter: string;
  career: string;
  plan_ciis: string;
  plan_postmaster: string;
  auth_provider: string;
  tiempoExpiracion: string;
  talleres: unknown[];
  dataPostmaster: number;
  dataCiis: number;
}

export interface InscriptionResponseError {
  error: string;
  reason: string;
  code: number;
}