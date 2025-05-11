import { Metadata } from "next";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: {
    template: '%s - POSTMASTER',
    default: 'XII POSTMASTER',
  },
  description: "Encuentro de egresados de la Escuela Profesional de Ingeniería en Informática y Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
