import type { Metadata } from "next";
import { jetBrainsMono, titleFont } from "@/config";
import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "XXII POSTMASTER",
  description: "POSTMASTER EVENT",
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
