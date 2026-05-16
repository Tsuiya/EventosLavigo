import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Eventos Empresariais | Lavigo Produções",
  description: "Eleve o padrão visual da sua marca. Cobertura de eventos corporativos em Ibitinga e região.",
};

export default function CorporativoPage() {
  return (
    <>
      <HeroSection
        headline="Sua marca com a estética de cinema que ela merece."
        subheadline="Registro de eventos empresariais, confraternizações e campanhas institucionais."
        primaryCtaText="Falar com especialista"
        primaryCtaHref="https://wa.me/5516991609339?text=Olá! Preciso de uma proposta para cobertura de um evento corporativo."
        secondaryCtaText="Ver portfólio"
        secondaryCtaHref="/portfolio?filter=corporativo"
        bgImageUrl="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop"
      />
      <CTASection headline="Como podemos ajudar a sua empresa hoje?" />
    </>
  );
}
