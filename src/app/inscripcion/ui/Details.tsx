import { Payments } from "@/components"
// import PaymentInfo from "@/components/paymets/PaymentInfo"
import { EventInscription } from "@/interface"
import { BiCalendar, BiMapPin } from "react-icons/bi"
import { TiTicket } from "react-icons/ti"

export const Details = (event: EventInscription) => {
  return (
    <div className="bg-white/5 rounded-lg border border-[#1e1e2f] p-6 lg:p-8 h-fit lg:w-2/5">

      {/* Event Details */}
      <div className="space-y-4">

        {/* Info evento */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-1 font-title">
              {event.eventName}
            </h2>
          </div>
          <div className="ml-4">
            <span className="text-xl font-extrabold text-blue-100 font-jetbrains-mono">
              {event.price}
            </span>
          </div>

        </div>

        {/* details event */}
        <div className="bg-[#000126] rounded-lg p-4 space-y-1">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <BiCalendar size={16} className="text-blue-500" />
            <span>
              {event.eventDate}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <BiMapPin size={16} className="text-red-500" />
            <span>
              {event.eventLocation}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <TiTicket size={16} className="text-green-500" />
            <span>
              Incluye certificacion
            </span>
          </div>

        </div>

        {/* Metodos de pago */}
        <div className="">
          <h3 className="text-sm font-semibold text-gray-100 mb-4">
            Métodos de pago
          </h3>
          <Payments />
        </div>

      </div>

    </div>
  )
}
