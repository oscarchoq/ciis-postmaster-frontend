"use client";
import useCountdown from "@/hook/useCountDown";
import { CardCounter } from "./CardCounter"


export const Counter = () => {

  const { timeDays, timeHours, timeMinutes, timeSeconds } = useCountdown(
    "August 22, 2025 00:00:00"
  );

  return (
    <div className='flex gap-x-6 justify-center transition-transform text-2xl mt-10'>
      <CardCounter
        time={timeDays}
        descripcion="Dias"
      />
      <CardCounter
        time={timeHours}
        descripcion="Horas"
      />
      <CardCounter
        time={timeMinutes}
        descripcion="Minutos"
      />
      <CardCounter
        time={timeSeconds}
        descripcion="Segundos"
      />
      </div>
  )
}
