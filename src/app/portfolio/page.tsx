"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

const categories = ["Todos", "Casamentos", "Aniversários", "Ensaios", "Corporativo"];

const portfolioImages = [
  { id: 1, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-6_kdkf2b.jpg", aspect: "aspect-[4/5]" },
  { id: 2, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-20_oyt27f.jpg", aspect: "aspect-square" },
  { id: 3, category: "Aniversários", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606157/Still_2026-05-12_141454_1.1.1_tavxdp.jpg", aspect: "aspect-[3/4]" },
  { id: 4, category: "Ensaios", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605672/agatha-66_iu4u8q.jpg", aspect: "aspect-[4/5]" },
  { id: 5, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-3_yip935.jpg", aspect: "aspect-video" },
  { id: 6, category: "Corporativo", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop", aspect: "aspect-square" },
  { id: 7, category: "Ensaios", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606385/DSC03479_1_1_lubc7f.jpg", aspect: "aspect-[3/4]" },
  { id: 8, category: "Aniversários", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg", aspect: "aspect-square" },
  { id: 9, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-5_j2ri4t.jpg", aspect: "aspect-[4/5]" },
  { id: 10, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-13_voqxat.jpg", aspect: "aspect-square" },
  { id: 11, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972857/LR-1_schl7z.jpg", aspect: "aspect-[3/4]" },
  { id: 12, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-27_pwvsaa.jpg", aspect: "aspect-[4/5]" },
  { id: 13, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-28_iii8ow.jpg", aspect: "aspect-square" },
  { id: 14, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-29_nfyw60.jpg", aspect: "aspect-[3/4]" },
  { id: 15, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-41_ka3fy6.jpg", aspect: "aspect-[4/5]" },
  { id: 16, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-42_osjhha.jpg", aspect: "aspect-video" },
  { id: 17, category: "Casamentos", src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-39_djwg3c.jpg", aspect: "aspect-square" }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredImages = activeFilter === "Todos" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeFilter);

  return (
    <div className="pt-32 bg-background min-h-screen">
      <section className="container-custom pb-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl mb-6 text-lavigo-dark">Nosso Portfólio</h1>
          <p className="text-foreground/70 text-lg font-light">
            Um recorte de histórias reais, emoções autênticas e momentos que escolhemos congelar no tempo.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm transition-colors border ${
                activeFilter === cat
                  ? "bg-lavigo-dark text-white border-lavigo-dark"
                  : "bg-transparent text-lavigo-dark border-lavigo-dark/20 hover:border-lavigo-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation (using simple CSS columns for responsiveness) */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative w-full break-inside-avoid overflow-hidden group rounded-2xl ${img.aspect}`}
              >
                <Image
                  src={img.src}
                  alt={`Portfolio image ${img.id} - ${img.category}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTASection headline="Gostou do que viu?" />
    </div>
  );
}
