import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const jost = Jost({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lavigo Studios | Fotografia e Vídeo para Eventos em Ibitinga, SP",
  description: "Casamentos, aniversários, ensaios e eventos corporativos em Ibitinga e região. Fotografia e vídeo com narrativa autoral. Solicite seu orçamento.",
  openGraph: {
    title: "Lavigo Studios | Fotografia e Vídeo para Eventos em Ibitinga, SP",
    description: "Casamentos, aniversários, ensaios e eventos corporativos em Ibitinga e região. Fotografia e vídeo com narrativa autoral. Solicite seu orçamento.",
    url: "https://eventos.lavigo.com.br", // replace with actual domain
    siteName: "Lavigo Studios",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary", // usa formato quadrado pequeno (ideal para o favicon)
    title: "Lavigo Studios | Fotografia e Vídeo para Eventos em Ibitinga, SP",
    description: "Casamentos, aniversários, ensaios e eventos corporativos em Ibitinga e região. Fotografia e vídeo com narrativa autoral. Solicite seu orçamento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
