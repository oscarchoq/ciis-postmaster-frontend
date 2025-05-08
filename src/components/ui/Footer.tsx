import { FaLinkedin, FaSquareFacebook, FaYoutube } from "react-icons/fa6"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full px-4 border-t border-white/5 backdrop-blur-lg bg-gradient-to-b from-transparent via-transparent to-black/20">
      <div className="max-w-3xl mx-auto py-8">  
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-center md:text-left leading-none">
            <h3 className="font-semibold text-white uppercase font-title">
              postmaster {currentYear}
              </h3>
            <p className="text-sm text-white/60 mt-1">
              Encuentro de egresados
            </p>
          </div>
          
          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/ciistacna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/80 transition-colors transform hover:scale-110 duration-300"
            >
              <FaSquareFacebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@ciistacna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/80 transition-colors transform hover:scale-110 duration-300"
            >
              <FaYoutube className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </a>
            <a
              href="https://www.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226/?originalSubdomain=pe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/80 transition-colors transform hover:scale-110 duration-300"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

        </div>
        
        <div className="mt-8 text-center text-sm text-white/40">
          <p>© {currentYear} PostMaster por Círculo de Estudios de la ESIS</p>
        </div>
      </div>
    </footer>
  )
}
