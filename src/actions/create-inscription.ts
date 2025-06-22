import { InscriptionForm } from "@/interface"

export const createInscription = async (data: InscriptionForm) => {
  try {

    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      ok: true
    }
  } catch (error) {
    console.log(error)
  }
}