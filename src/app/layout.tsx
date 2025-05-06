import type { Metadata } from "next";
import { robotoMono300 } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "XXII-POSTMASTER",
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
        className={`${robotoMono300.className}  antialiased`}
      >
        <main className="bg-[#000126]">
          {children}
        </main>
      </body>
    </html>
  );
}
