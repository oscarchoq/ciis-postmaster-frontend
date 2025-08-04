import { apiConfig } from '@/config';
import { SpeakersResponse } from '@/interface';
import { Speaker } from './Speaker';

const getSpeakers = async (): Promise<SpeakersResponse[]> => {
  const revalidateTime = process.env.NODE_ENV === 'production' ? 43200 : 60; // 12 horas en prod, 1 minuto en dev
  
  const data = fetch(`${apiConfig.endPoints.speakers}`, {
    next: { revalidate: revalidateTime }
  })
    .then(res => res.json())
  return data;
}

export const GridSpeakers = async () => {

  const speakers = await getSpeakers();

  return (

    <section
      id='ponentes'
      className='flex flex-col min-h-screen items-center justify-center text-white py-20 px-4 bg-gradient-to-b from-black/40 via-transparent to-transparent'
    >

      <div className={`text-center mb-12 animate-fade-in-up`}>
        <h2 className='font-title text-4xl font-extrabold uppercase pb-2'>Ponentes</h2>
        <p className='text-lg sm:text-xl leading-tight text-zinc-300'>Egresados de la Escuela Profesional de Ingeniería en Informática y Sistemas</p>
      </div>

      <div className='grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up'>
        {
          speakers.map(speaker => (
            <Speaker key={speaker.id} speaker={speaker} />
          ))
        }
      </div>

    </section>
  )
}