import { Metadata } from "next";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "INSCRIPCIÓN POSTMASTER",
  description: "Inscríbete al XXII Postmaster y forma parte del evento que conecta a estudiantes con egresados exitosos de Ingeniería en Informática y Sistemas. ¡Cupos limitados!",
};

export default function InscripcionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
