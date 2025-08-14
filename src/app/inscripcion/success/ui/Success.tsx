"use client";
import { Check, Home, UserPlus } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export const Success = ({name}: {name: string}) => {
  const router = useRouter()

  const handleNewRegistration = () => {
    router.push('/inscripcion')
  }

  const handleGoHome = () => {
    router.push('/')
  }

  return (
    <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-sm mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 150,
            }}
            className="mb-8"
          >
            <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute inset-0 bg-emerald-500/20 rounded-full"
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative z-10 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30"
              >
                <Check className="w-10 h-10 text-white stroke-[2.5]" />
              </motion.div>

              {/* Subtle pulse */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0] }}
                transition={{
                  duration: 2.5,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="absolute inset-0 bg-emerald-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-4">
              ¡Registro exitoso!
            </h1>
            <p className="text-lg text-white/80 font-medium mb-6">
              Hola, <span className="text-emerald-400 uppercase">{name}</span>
            </p>
          </motion.div>

          {/* Simple Status Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <p className="text-white/80 text-base leading-relaxed">
              Verificaremos tu pago en las próximas horas
              <br />
              <span className="text-white/70 text-sm">
                Te enviaremos la confirmación al correo
              </span>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center justify-center gap-8 text-xs"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNewRegistration}
              className="text-white/50 hover:text-white/80 transition-colors duration-200 flex items-center gap-1 font-normal"
            >
              <UserPlus className="w-3 h-3" />
              Nuevo Registro
            </motion.button>

            <div className="w-px h-3 bg-white/20"></div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoHome}
              className="text-white/50 hover:text-white/80 transition-colors duration-200 flex items-center gap-1 font-normal"
            >
              <Home className="w-3 h-3" />
              Volver al Inicio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
  )
}