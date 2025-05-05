
import { getBasePath } from '@/lib';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>

      <section id='home' className={styles.intro}>
        <video 
          className={styles.videofondo}
          autoPlay
          loop
          muted
          playsInline
          >
            <source src={getBasePath("/video1.mp4")} type='video/mp4' />
            <track kind='captions' srcLang='es' label='Spanish Captions' default />
        </video>
        <div className={styles.introContainer}>
          <Image
            src={getBasePath("/logo-postmaster.png")}
            alt='Postmaster Logo'
            width={500}
            height={500}
            priority
          />
          <p className={styles.date}>21 de Agosto del 2025</p>
        </div>
      </section>

    </>
  );
}
