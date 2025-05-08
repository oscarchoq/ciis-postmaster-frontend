
import { Header, Footer, GridSpeakers, HeroSection, Schedule} from '@/components';

export default function Home() {

  return (
    <>
      <Header />
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
        <Schedule />
      </section>

      <section id="inscribete">
        {/* Contenido de la sección INSCRIBIRTE */}
      </section>  
      
      <Footer />
    </>
  );
}
