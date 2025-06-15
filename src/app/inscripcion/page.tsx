import { Details } from "./ui/Details"
import { Form } from "./ui/Form"
import { EventInscription } from '../../interface/Inscription';

const event: EventInscription = {
  id: "1",
  eventName: "POSTMASTER XXII",
  eventDate: "22 de Agosto, 2025 - 9:00 AM",
  eventLocation: "Auditorio de Civil, UNJBG",
  price: "S/ 30.00",
}

const page = () => {
  return (
    <div className="container mx-auto px-4 py-6 lg:py-8 max-w-6xl text-white">

      {/* Mobile header */}
      <div className="lg:hidden mb-6 text-center">
        <h1 className="text-2xl font-bold text-white mb-2">
          Registro de Evento
        </h1>
        <p className="text-gray-200">
          Completa tu información para asegurar tu lugar
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
        <Details {...event} />
        <Form />
      </div>


    </div>
  )
}

export default page