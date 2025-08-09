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
      body: JSON.stringify(apiPayload),
      credentials: 'include'
    });

    if (!response.ok) {
      const errorData: InscriptionResponseError = await response.json();
      throw new Error(errorData.reason);
    }

    const result: InscriptionResponse = await response.json()

    // Retorna un token y lo usa para subir archivos
    const rawSetCookie = response.headers.get("set-cookie");
    let token = null;
    let userCookie = null;
    
    if (rawSetCookie) {
      // Extraer token
      const tokenMatch = rawSetCookie.match(/token=([^;]+)/);
      if (tokenMatch) {
        token = tokenMatch[1];
      }
    }
    
    // Usa una cookie para subir archivos con el resultado del registro
    if (result) {
      userCookie = encodeURIComponent(JSON.stringify(result));
    }

    // Subir archivo si hay token, user cookie y el archivo
    if (token && userCookie && data.voucher) {
      const uploadResult = await uploadFiles(token, userCookie, data.voucher);
      if (!uploadResult.ok) {
        return {
          ok: false,
          message: uploadResult.message,
        }
      }
    }

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
};

const uploadFiles = async (token: string, userCookie: string, voucherFile: File) => {
  try {
    // payment_doc
    // scholar_doc
    // algo de code para delegaciones

    const myHeaders = new Headers();
    myHeaders.append("Cookie", `token=${token}; user=${userCookie}`);

    const formdata = new FormData();
    formdata.append("payment_doc", voucherFile);
    formdata.append("scholar_doc", voucherFile);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    const response = await fetch("https://ciistacna.com/api/v2/event/15/reservation/ciis?type_attend=estudiantesesis&type_event=ciis", requestOptions);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error al subir archivos:", errorText);
      return {
        ok: false,
        message: "Error al subir los archivos"
      };
    }
    
    return {
      ok: true,
      message: "Archivo subido"
    };
    
  } catch (error) {
    console.error("Error en uploadFiles:", error);
    return {
      ok: false,
      message: "Error al subir los archivos"
    };
  }
};