"use client";

import clsx from "clsx";
import { useState } from "react";
import { CreditCard, Smartphone } from "lucide-react";
import { BCP, Plin, Yape } from "./methods";

type PaymentMethod = "yape" | "plin" | "bcp";

const paymentMethods = [
  {
    id: "yape" as PaymentMethod,
    name: "Yape",
    icon: <Smartphone size={16} />,
  },
  {
    id: "plin" as PaymentMethod,
    name: "Plin",
    icon: <Smartphone size={16} />,
  },
  {
    id: "bcp" as PaymentMethod,
    name: "BCP",
    icon: <CreditCard size={16} />,
  },
];

export const Payments = () => {
  const [selectMethod, setSelectMethod] = useState<PaymentMethod>("yape")

  return (
    <>
      {/* Tabs */}
      <div className="flex space-x-1 mb-4 bg-[#000126] rounded-lg p-1">
        {paymentMethods.map(method => (
          <button
            key={method.id}
            onClick={() => setSelectMethod(method.id)}
            className={clsx(
              `flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors cursor-pointer`,
              {
                "bg-purple-700": selectMethod === method.id && method.id === "yape",
                "bg-sky-700": selectMethod === method.id && method.id === "plin",
                "bg-blue-900": selectMethod === method.id && method.id === "bcp",
                "text-gray-200 hover:text-gray-100": selectMethod !== method.id,
              }
            )}
          >
            {method.icon}
            {method.name}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="min-h-[200px]">

        {
          selectMethod === "yape" &&
          <Yape
            titular={"Hernan Ander Chambilla Chambilla"}
            celular={"921066567"}
            qr={"/payments/qr-yape.svg"}
          />
        }

        {
          selectMethod === "plin" &&
          <Plin
            titular={"Hernan Ander Chambilla Chambilla"}
            celular={"921066567"}
            qr={"/payments/qr-yape.svg"}
          />

        }
        {
          selectMethod === "bcp" &&
          <BCP
            titular={"Hernan Ander Chambilla Chambilla"}
            cuenta={"540-99754411-0-54"}
            cci={"002-540-199754411054-33"}
          />
        }
      </div>
    </>
  )
}
