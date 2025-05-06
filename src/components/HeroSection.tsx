import { getBasePath } from '@/lib'
import Image from 'next/image'
import { Counter } from './counter/Counter'

export const HeroSection = () => {
  return (
    <section className='relative flex flex-col justify-center items-center p-24 min-h-screen overflow-hidden text-white text-center bg-zinc-700/100'>
      <div className='z-10 relative flex flex-col items-center gap-5'>
        {/* Logo */}
        <Image
          src={getBasePath("/logo-postmaster.png")}
          alt='Postmaster Logo'
          width={500}
          height={300}
          className="w-auto h-auto"
          priority
        />
        <p className='text-2xl font-semibold tracking-widest'>22 de Agosto del 2025</p>
        {/* Contador */}
        <Counter />
      </div>


      {/* Background */}
      <video
        src={getBasePath("/video.mp4")}
        autoPlay
        muted
        loop
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay'
      ></video>
    </section>
  )
}
