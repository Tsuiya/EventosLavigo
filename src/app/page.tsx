import HeroSection from "@/components/sections/HeroSection";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Casamentos",
      description: "Cobertura completa, focada na emoção e nos detalhes invisíveis.",
      href: "/casamentos",
      imageUrl: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-6_kdkf2b.jpg",
    },
    {
      title: "Aniversários",
      description: "Registros autênticos para celebrar a vida e as pessoas que importam.",
      href: "/aniversarios",
      imageUrl: "https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg",
    },
    {
      title: "Ensaios Externos",
      description: "Retratos cinematográficos com direção leve e natural.",
      href: "/ensaios",
      imageUrl: "https://res.cloudinary.com/drczznkji/image/upload/v1778605672/agatha-66_iu4u8q.jpg",
    },
    {
      title: "Corporativo",
      description: "Sua marca com a estética de cinema que ela merece.",
      href: "/eventos-empresariais",
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop",
    },
  ];

  const portfolioPreview = [
    "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-20_oyt27f.jpg",
    "https://res.cloudinary.com/drczznkji/image/upload/v1776972857/LR-1_schl7z.jpg",
    "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-3_yip935.jpg",
    "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-27_pwvsaa.jpg",
    "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-5_j2ri4t.jpg",
    "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-41_ka3fy6.jpg",
  ];

  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <HeroSection
        headline="Cada momento merece ser lembrado do jeito que ele foi sentido."
        subheadline="Fotografia e vídeo para casamentos, aniversários e eventos em Ibitinga e região."
        primaryCtaText="Falar no WhatsApp"
        primaryCtaHref="https://wa.me/5516991609339?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
        secondaryCtaText="Ver nossos trabalhos"
        secondaryCtaHref="/portfolio"
        bgImageUrl="https://res.cloudinary.com/drczznkji/image/upload/v1778602019/Still_2026-03-07_154153_2.2.2_pbxpfm.jpg"
      />

      {/* SEÇÃO 2 — Serviços */}
      <section id="servicos" className="section-padding bg-background text-foreground">
        <div className="container-custom">
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Nossos Serviços</h2>
            <p className="text-foreground/70 text-lg font-light">
              Mais do que cliques, criamos narrativas visuais que capturam a verdadeira essência de cada momento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — Portfólio Preview */}
      <section className="py-24 bg-lavigo-dark text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Fragmentos de histórias</h2>
              <p className="text-white/60 text-lg font-light">
                Um pequeno vislumbre do que construímos ao lado de nossos clientes.
              </p>
            </div>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-lavigo-gold hover:text-white transition-colors"
            >
              Ver portfólio completo <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioPreview.map((src, idx) => (
              <div 
                key={idx} 
                className="relative aspect-square overflow-hidden group bg-black/20 rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Portfolio preview ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — Por que a Lavigo? */}
      <section className="section-padding bg-[#ECE6DF]">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-lavigo-dark">Nosso Ponto de Vista</h2>
            <p className="text-lavigo-dark/70 text-lg font-light">
              Nossa abordagem vai além do equipamento. É sobre como enxergamos você e a sua história.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Narrativa antes de câmera",
                desc: "Não fazemos registros isolados. Contamos sua história com método, ritmo e sensibilidade.",
              },
              {
                title: "Presença local, resultado profissional",
                desc: "De Ibitinga para o mundo. Trazemos a estética de grandes produções para o seu evento.",
              },
              {
                title: "Você não precisa posar — só sentir",
                desc: "Nossa direção é invisível. Criamos um ambiente seguro para que as emoções reais aconteçam.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="font-serif text-6xl text-lavigo-gold/30 mb-6">0{i + 1}</span>
                <h3 className="font-serif text-2xl text-lavigo-dark mb-4">{item.title}</h3>
                <p className="text-lavigo-dark/70 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — Depoimentos */}
      <TestimonialCarousel />

      {/* SEÇÃO 6 — CTA de conversão */}
      <CTASection />

    </>
  );
}
