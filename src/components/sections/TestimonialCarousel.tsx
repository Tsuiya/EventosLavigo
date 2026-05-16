"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "A Lavigo não apenas tirou fotos, eles capturaram a alma do nosso casamento. Toda vez que vejo o vídeo, eu choro. É como reviver o dia exatamente como ele foi.",
    author: "Marina & João",
    event: "Casamento",
  },
  {
    id: 2,
    text: "Fiquei impressionada com a sensibilidade. Eles têm um jeito muito natural de dirigir as cenas, a gente nem percebia que estava sendo filmada. O resultado ficou de cinema!",
    author: "Luiza Campos",
    event: "Ensaio Externo",
  },
  {
    id: 3,
    text: "A qualidade do material entregue elevou o padrão da nossa marca. Profissionalismo impecável e uma entrega muito acima da média.",
    author: "Carlos Silveira",
    event: "Evento Corporativo",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="section-padding bg-lavigo-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">O que dizem sobre nós</h2>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          <Quote className="w-16 h-16 text-lavigo-gold/20 mx-auto mb-8" />

          <div className="overflow-hidden min-h-[250px] sm:min-h-[450px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center absolute inset-0 w-full"
              >
                <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8 text-balance">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
                <div>
                  <p className="font-medium text-lg text-white">{testimonials[currentIndex].author}</p>
                  <p className="text-white/50 text-sm">{testimonials[currentIndex].event}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-lavigo-gold transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-lavigo-gold transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-lavigo-gold w-6" : "bg-white/20"
                  }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
