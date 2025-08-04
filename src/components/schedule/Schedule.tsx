import { apiConfig } from '@/config';
import { ScheduleResponse } from '@/interface'
import { FaCalendarDays, FaSquareFacebook } from 'react-icons/fa6';

import { ScheduleList } from './ScheduleList';

const getSchedule = async (): Promise<ScheduleResponse[]> => {
  const revalidateTime = process.env.NODE_ENV === 'production' ? 43200 : 60; // 12 horas en prod, 1 minuto en dev
  
  const data: Promise<ScheduleResponse[]> = fetch(`${apiConfig.endPoints.schedule}`, {
    next: { revalidate: revalidateTime }
  })
    .then(res => res.json())
  return data;
}

export const Schedule = async () => {

  const schedule = await getSchedule();

  return (
    <section
      id='horario'
      className={`text-white min-h-screen py-12 animate-fade-in-up`}
    >
      {/* Titulo */}
      <div className={`text-center mb-12`}>
        <h2 className='font-title text-4xl font-extrabold uppercase pb-2'>Cronograma</h2>

        {/* Vista movil */}
        <p className="text-lg sm:hidden leading-tight text-zinc-300">
          <span className="block">22 de Agosto de 2025</span>
          <span className="block">Auditorio de Civil - UNJBG</span>
        </p>

        {/* Vista desktop */}
        <p className="hidden sm:block text-xl leading-tight text-zinc-300">
          22 de Agosto de 2025 
          • Auditorio de Civil - UNJBG
        </p>

      </div>
      {/* Botones */}
      <div className='flex justify-center items-center gap-4 mb-12 flex-col md:flex-row'>

        <a
          href="https://www.facebook.com/61556532988025/live_videos/"
          target='_blank'
          className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-cyan-600 inline-block">

          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-cyan-600 group-hover:h-full opacity-90" />
          <span className="flex items-center justify-center gap-2 relative group-hover:text-white">
            <FaSquareFacebook />
            Ver en vivo
          </span>
        </a>

        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=XXII+POSTMASTER&dates=20250822/20250823&details=Encuentro+de+egresados+de+la+Escuela+Profesional+de+Ingenier%C3%ADa+en+Inform%C3%A1tica+y+Sistemas&location=Universidad+Nacional+Jorge+Basadre+Grohmann"
          target='_blank'
          className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-cyan-600 inline-block">

          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-cyan-600 group-hover:h-full opacity-90" />

          <span className="flex items-center justify-center gap-2 relative group-hover:text-white">
            <FaCalendarDays />
            Agregar a tu calendario
          </span>
        </a>
      </div>

      {/* Cronograma */}
      <div className='flex items-center justify-center px-4'>

        <div className='max-w-3xl flex flex-col justify-center w-full gap-12'>
          {schedule[0] && (
            <>
              <ScheduleList shift={"Turno Mañana"} event={schedule[0].early} />
              <ScheduleList shift={"Turno Tarde"} event={schedule[0].late} />
            </>
          )}
        </div>

      </div>
    </section>
  )
}
