import type { Metadata } from "next";
import { SlideProvider } from "@/context/SlideContext";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOMP Deck — Síndrome dos Ovários Policísticos",
  description: "Apresentação cinematográfica sobre SOMP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[#0F1419] text-white overflow-hidden">
        <SlideProvider>
          {children}
          <Navigation />
        </SlideProvider>
      </body>
    </html>
  );
}
