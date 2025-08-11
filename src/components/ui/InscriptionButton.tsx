"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export const InscriptionButton = () => {
  return (
    <div className="mt-2">
      <Link href="/inscripcion">
        <motion.div
          className="font-title bg-gray-100/90 text-gray-900 border border-white/20 px-9 py-3 rounded-full font-bold text-lg tracking-widest cursor-pointer inline-block transition-all duration-500 ease-in-out shadow-lg"
          initial={{ 
            opacity: 1
          }}
          animate={{
            y: [0, -1.5, 0],
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 12px 25px rgba(70, 90, 130, 0.4), 0 0 25px rgba(100, 120, 160, 0.3)",
              "0 18px 35px rgba(70, 90, 130, 0.6), 0 0 35px rgba(100, 120, 160, 0.5)",
              "0 12px 25px rgba(70, 90, 130, 0.4), 0 0 25px rgba(100, 120, 160, 0.3)"
            ]
          }}
          transition={{
            y: { 
              duration: 1.0, 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "reverse"
            },
            scale: { 
              duration: 1.0, 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "reverse"
            },
            boxShadow: { 
              duration: 1.0, 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "reverse"
            }
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#ffffff",
            backdropFilter: "blur(6px)",
            boxShadow: [
              "0 12px 25px rgba(70, 90, 130, 0.4), 0 0 25px rgba(100, 120, 160, 0.3)"
            ],
            transition: { duration: 0.4, ease: "easeInOut" }
          }}
          whileTap={{
            scale: 0.97
          }}
        >
          INSCRÍBETE AHORA
        </motion.div>
      </Link>
    </div>
  )
}
