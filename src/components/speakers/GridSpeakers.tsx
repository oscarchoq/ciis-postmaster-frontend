import { apiConfig, comfortaa } from '@/config';
import { SpeakersResponse } from '@/interface';
import { Speaker } from './Speaker';

const getSpeakers = async (): Promise<SpeakersResponse[]> => {
  const data = fetch(`${apiConfig.domain}/reports/14/speakers.json`)
    .then(res => res.json())
  return data;
}

export const GridSpeakers = async () => {

  const speakers = await getSpeakers();

  return (
    <section className='flex  flex-col min-h-screen items-center justify-center text-white py-20 px-4'>
      <div className={`${comfortaa.className} text-center mb-12`}>
        <h2 className='text-4xl font-bold uppercase'>Ponentes</h2>
        <p className='text-lg'>Egresados de la Escuela Profesional de Ingeniería en Informática y Sistemas</p>
      </div>

      <div className='grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2 lg:grid-cols-3'>
        {
          speakers.map(speaker => (
            <Speaker key={speaker.id} speaker={speaker} />
          ))
        }
      </div>

    </section>
  )
}