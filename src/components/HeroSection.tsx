import { getBasePath } from '@/lib'
import Image from 'next/image'
import { Counter } from './counter/Counter'

export const HeroSection = () => {
  return (
    <section className='relative flex flex-col justify-center items-center px-6 min-h-screen overflow-hidden text-white text-center bg-zinc-700/50 w-full'>

      {/* Background */}
      <video
        id='hero-video'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        poster='https://res.cloudinary.com/dnz4gqdqw/video/upload/h_250,q_auto/v1746596344/ruyfi4l9duu8uxj7ukaf.jpg'
        className='absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay'
      >
        <source src="https://res.cloudinary.com/dnz4gqdqw/video/upload/f_auto:video,q_auto/ruyfi4l9duu8uxj7ukaf" />
      </video>

      <div className='z-10 relative flex flex-col items-center gap-5 animate-fade-in-up'>

        {/* Logo - relacion 2.75:1*/}
        <Image
          src={getBasePath("/logo-postmaster.png")}
          alt='Postmaster Logo'
          width={500}
          height={182}
          className="w-auto h-auto"
          priority
        />
        <p className='text-xl sm:text-2xl font-bold tracking-widest font-title'>22 de Agosto del 2025</p>

        {/* Contador */}
        <Counter />
        
      </div>

      {/* Fix para reanudar el video al volver del background (especialmente en movil) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('visibilitychange', () => {
              const video = document.getElementById('hero-video');
              if (document.visibilityState === 'visible') {
                video?.play().catch(() => {});
              }
            });
          `,
        }}
      /> 

    </section>
  )
}
