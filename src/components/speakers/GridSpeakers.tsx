import { apiConfig, robotoMono400, robotoMono700 } from '@/config';
import { SpeakersResponse } from '@/interface';
import styles from '@/styles/Speaker.module.css';
import { Speaker } from './Speaker';

const getSpeakers = async (): Promise<SpeakersResponse[]> => {
  const data = fetch(`${apiConfig.domain}/reports/14/speakers.json`)
    .then(res => res.json())
  return data;
}

export const GridSpeakers = async () => {

  const speakers = await getSpeakers();
  console.log(speakers)

  return (
    <div id="ponentes" className={styles.containerSpeakers}>
      <div className={styles.headerSpeakers}>
        <div className={robotoMono700.className}>Ponentes</div>
        <p className={robotoMono400.className}>Egresados de la Escuela Profesional de Ingeniería en Informática y Sistemas</p>
      </div>

      <div className={styles.gridSpeakers}>
        {
        speakers.map( speaker => (
          <Speaker key={speaker.id} speaker={speaker} />
        ) )
        }
      </div>
    </div>
  )
}