import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inscripción - XII POSTMASTER",
  description: "Inscripción para el Encuentro de egresados de la Escuela Profesional de Ingeniería en Informática y Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="">
        {children}
      </main>
      <Toaster richColors position="top-right" theme="light" />
    </>
  );
}
