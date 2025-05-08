
import { Header, Counter, GridSpeakers, HeroSection } from '@/components';
import { getBasePath } from '@/lib';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

export default async function Home() {

  return (
    <>
      <Header />

      <main>
        

        {/* Sección de Ponentes */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* Sección de Ponentes */}
        <section id="ponentes">
          <GridSpeakers />
        </section>

        {/* Aquí podrías agregar más secciones como HORARIO, INSCRIBIRTE, etc. */}
        <section id="horario">
          
        </section>

        <section id="inscribete">
          {/* Contenido de la sección INSCRIBIRTE */}
        </section>
      </main>
      
      {/* <section id='home' className={styles.intro}>
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
          <Counter />
        </div>

        <GridSpeakers/>

      </section> */}

    </>
  );
}
