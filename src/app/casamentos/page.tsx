import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Casamentos | Lavigo Produções",
  description: "Fotografia e vídeo de casamentos com narrativa autoral e foco na emoção.",
};

export default function CasamentosPage() {
  return (
    <>
      <HeroSection
        headline="O seu amor, contado em frames."
        subheadline="Não dirigimos sentimentos, apenas os capturamos. Uma cobertura completa e invisível para o seu grande dia."
        primaryCtaText="Solicitar orçamento"
        primaryCtaHref="https://wa.me/5516991609339?text=Olá! Tenho interesse em fotografia/vídeo para meu casamento."
        secondaryCtaText="Ver portfólio"
        secondaryCtaHref="/portfolio?filter=casamentos"
        bgImageUrl="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop"
      />
      
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-6">Como Funciona</h2>
            <p className="text-foreground/70 mb-12">
              Nosso processo é pensado para que você aproveite o seu dia sem preocupações.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 bg-lavigo-dark/5 rounded-xl border border-lavigo-dark/10">
                <h3 className="font-serif text-2xl mb-3 text-lavigo-dark">1. Reunião de Alinhamento</h3>
                <p className="text-foreground/70">Conhecemos sua história e entendemos o que é mais importante para você no grande dia.</p>
              </div>
              <div className="p-6 bg-lavigo-dark/5 rounded-xl border border-lavigo-dark/10">
                <h3 className="font-serif text-2xl mb-3 text-lavigo-dark">2. Pré-Wedding (Opcional)</h3>
                <p className="text-foreground/70">Um ensaio leve e divertido para nos conectarmos antes do casamento.</p>
              </div>
              <div className="p-6 bg-lavigo-dark/5 rounded-xl border border-lavigo-dark/10">
                <h3 className="font-serif text-2xl mb-3 text-lavigo-dark">3. O Grande Dia</h3>
                <p className="text-foreground/70">Cobertura documental e invisível. Sem poses forçadas, apenas sentimentos reais.</p>
              </div>
              <div className="p-6 bg-lavigo-dark/5 rounded-xl border border-lavigo-dark/10">
                <h3 className="font-serif text-2xl mb-3 text-lavigo-dark">4. Entrega Emocional</h3>
                <p className="text-foreground/70">Receba suas fotos e vídeos em uma galeria exclusiva, com um prazo que respeita a qualidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Sua história merece ser guardada para sempre" />
    </>
  );
}
