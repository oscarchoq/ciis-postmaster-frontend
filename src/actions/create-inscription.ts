"use server";

import { InscriptionForm, InscriptionResponse, InscriptionResponseError } from "@/interface";

export const createInscription = async (data: InscriptionForm) => {
  try {

    // Mapear los datos del formulario al formato que espera el API
    const apiPayload = {
      nationality: "Perú",
      dni: data.numeroDocumento,
      name: data.nombres,
      lastname: data.apellidos,
      email: data.email,
      password: data.password,
      confPassword: data.confirmPassword,
      studycenter: data.universidad,
      career: data.carrera,
      phone: data.celular,
      plan_ciis: "estudiantesesis",
      plan_postmaster: ""
    }

    // Realizar la petición al API
    const response = await fetch('https://ciistacna.com/api/v2/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiPayload)
    });

    if (!response.ok) {
      const errorData: InscriptionResponseError = await response.json();
      throw new Error(errorData.reason);
    }

    const result: InscriptionResponse = await response.json()
    console.log(result)

    return {
      ok: true,
      message: "Inscripción creada exitosamente",
      userName: result.name
    } 

  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "error al inscribirse",
    }
  }
}