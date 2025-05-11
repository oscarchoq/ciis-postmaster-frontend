import type { Metadata } from "next";
import { jetBrainsMono, titleFont } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "XII POSTMASTER",
  description: "Encuentro de egresados de la Escuela Profesional de Ingeniería en Informática y Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${titleFont.variable} ${jetBrainsMono.variable} bg-[#000126] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
