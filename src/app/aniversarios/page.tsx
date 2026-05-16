import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Aniversários | Lavigo Produções",
  description: "Celebre a vida com memórias que duram para sempre. Filmagem e fotografia para aniversários em Ibitinga.",
};

export default function AniversariosPage() {
  return (
    <>
      <HeroSection
        headline="Celebre a vida. Nós guardamos a memória."
        subheadline="Dos primeiros aninhos às grandes celebrações. Retratos autênticos da sua alegria."
        primaryCtaText="Solicitar orçamento"
        primaryCtaHref="https://wa.me/5516991609339?text=Olá! Gostaria de um orçamento para fotografia/filmagem de aniversário."
        secondaryCtaText="Ver portfólio"
        secondaryCtaHref="/portfolio?filter=aniversarios"
        bgImageUrl="https://images.unsplash.com/photo-1530103862676-de8892bc952f?q=80&w=1470&auto=format&fit=crop"
      />
      <CTASection headline="Vamos celebrar juntos?" />
    </>
  );
}
