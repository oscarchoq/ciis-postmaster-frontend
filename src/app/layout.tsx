import type { Metadata } from "next";
import { jetBrainsMono, titleFont } from "@/config";
import "./globals.css";

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
        className={`${titleFont.variable} ${jetBrainsMono.variable}  antialiased`}
      >
        <main className="bg-[#000126]">
          {children}
        </main>
      </body>
    </html>
  );
}
