import { apiConfig } from "@/config";
import { SpeakersResponse } from "@/interface";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

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
            fill
            alt='Speaker Image'
            className='w-full h-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
          />
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/70 group-hover:to-black/75`}

        />

        <div className={`text-white absolute flex flex-col gap-4 inset-0 items-center justify-center px-3 text-center transition-all duration-500 group-hover:translate-y-0 translate-y-[60%]`}>

          {/* Nombres */}
          <p className={`text-lg font-bold tracking-wider font-title leading-none`}>
            <span className="block">{speaker.name}</span>
            <span className="block">{speaker.lastname}</span>
          </p>

          {/* descripcion */}
          <div className='group min-h-24 group-hover:min-h-0'>
            <p
              className={`text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden group-hover:block`}
            >
              {speaker.description}
            </p>
          </div>

          {/* Perfil LinkedIn */}
          <div className="pointer-events-none group-hover:pointer-events-auto group/button">
            <a
              href={speaker.socialNetwork}
              target="_blank"
              className="text-xs rounded-full py-2 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500
               group-hover:pointer-events-auto pointer-events-none
               relative inline-flex items-center justify-center overflow-hidden 
                bg-[#000126] font-medium text-neutral-200"
            >
              <div className="translate-x-0 opacity-100 transition group-hover/button:-translate-x-[150%] group-hover/button:opacity-0">
                Ver perfil
              </div>
              <div className="absolute translate-x-[150%] opacity-0 transition group-hover/button:translate-x-0 group-hover/button:opacity-100 flex items-center justify-center gap-2 text-xs">
                <FaLinkedin /> LinkedIn
              </div>
            </a>
          </div>

        </div>

      </div>
    </>
  )
}
