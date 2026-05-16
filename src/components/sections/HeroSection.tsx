"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  bgImageUrl?: string;
  bgVideoUrl?: string;
}

export default function HeroSection({
  headline,
  subheadline,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  bgImageUrl = "/images/hero-bg.jpg",
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-lavigo-dark">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay escuro sutil */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-white mb-6 text-balance leading-tight">
            {headline}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light text-balance">
            {subheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href={primaryCtaHref}
            className="inline-flex h-14 items-center justify-center bg-lavigo-gold text-lavigo-dark px-8 font-medium hover:bg-white transition-colors duration-300 rounded-full"
          >
            {primaryCtaText}
          </Link>
          <a
            href={secondaryCtaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center border border-white/30 bg-transparent text-white px-8 font-medium hover:bg-white/10 transition-colors duration-300 rounded-full"
          >
            {secondaryCtaText}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
