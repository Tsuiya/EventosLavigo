import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Ensaios Externos | Lavigo Produções",
  description: "Retratos cinematográficos com direção leve e natural em Ibitinga e região.",
};

export default function EnsaiosPage() {
  return (
    <>
      <HeroSection
        headline="A sua melhor versão, em cada detalhe."
        subheadline="Ensaios fotográficos externos com uma estética cinematográfica e direção espontânea."
        primaryCtaText="Agendar ensaio"
        primaryCtaHref="https://wa.me/5516991609339?text=Olá! Gostaria de agendar um ensaio fotográfico."
        secondaryCtaText="Ver portfólio"
        secondaryCtaHref="/portfolio?filter=ensaios"
        bgImageUrl="https://images.unsplash.com/photo-1517457210604-5178125b2d71?q=80&w=1472&auto=format&fit=crop"
      />
      <CTASection headline="Pronta para viver essa experiência?" />
    </>
  );
}
