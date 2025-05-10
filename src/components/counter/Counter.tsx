"use client";
import useCountdown from "@/hook/useCountDown";
import { CardCounter } from "./CardCounter"
import { useEffect, useState } from "react";


export const Counter = () => {

  const [mounted, setMounted] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown(
    "August 22, 2025 09:00:00"
  );

  const endCountdown =
    days === "00" && hours === "00" && minutes === "00" && seconds === "00";

  // Alternativa para evitar el problema de hidratacion
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted && !endCountdown) {
    return (
      // Preview no visible para que no se rompa la estructura del HeroSection
      <div
        className="flex gap-x-6 justify-center transition-transform mt-10 opacity-0"
        style={{ visibility: "hidden" }}
      >
        <CardCounter time={"00"} descripcion="Días" />
        <CardCounter time={"00"} descripcion="Horas" />
        <CardCounter time={"00"} descripcion="Minutos" />
        <CardCounter time={"00"} descripcion="Segundos" />
      </div>
    );
  }

  // Si acabo el contador no mostrar nada
  if (endCountdown) return null;

  return (
    <div className='flex gap-x-6 justify-center transition-transform mt-10 animate-fade-in-up'>
      {
        days !== "00" && (
          <CardCounter
            time={days}
            descripcion="Dias"
          />
        )
      }
      <CardCounter
        time={hours}
        descripcion="Horas"
      />
      <CardCounter
        time={minutes}
        descripcion="Minutos"
      />
      <CardCounter
        time={seconds}
        descripcion="Segundos"
      />
    </div>
  )
}
