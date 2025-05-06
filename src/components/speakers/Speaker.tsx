import { apiConfig, comfortaa } from "@/config";
import { SpeakersResponse } from "@/interface";
import Image from "next/image";

interface Props {
  speaker: SpeakersResponse
}

export const Speaker = ({ speaker }: Props) => {
  return (
    <>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">

        <div className="h-96 w-72">
          <Image
            src={apiConfig.domain + speaker.avatar}
            width={500}
            height={500}
            alt='Speaker Image'
            className='w-full h-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
          />
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/70 group-hover:to-black/75`}
          
        />

        <div className={`${comfortaa.className} text-white absolute flex  flex-col gap-4 inset-0 items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 translate-y-[60%]`}>

          {/* Nombres */}
          <p className={`text-lg font-bold tracking-wider`}>
            <span className="block">{speaker.name}</span>
            <span className="block">{speaker.lastname}</span>
          </p>

          {/* descripcion */}
          <div className='group min-h-28 group-hover:min-h-0'>
            <p
              className={`text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            >
              {speaker.description}
            </p>
          </div>

          {/* Perfil LinkedIn */}
          <a
            className={`text-xs rounded-full bg-neutral-900 py-2 px-3.5 shadow shadow-black/60 cursor-pointer`}
            href={speaker.socialNetwork}
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </>
  )
}
