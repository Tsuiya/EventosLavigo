"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface CTASectionProps {
  headline?: string;
}

export default function CTASection({ headline = "Pronto para guardar esse momento para sempre?" }: CTASectionProps) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516991609339";
  const displayPhone = "(16) 99160-9339"; // Substituir pelo real
  const defaultMessage = "Olá! Vim pelo site e gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="bg-lavigo-dark py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 text-balance leading-tight">
            {headline}
          </h2>
          
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-lavigo-gold text-lavigo-dark px-8 py-5 text-lg font-medium hover:bg-white transition-colors duration-300 rounded-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Solicitar orçamento pelo WhatsApp
          </motion.a>
          
          <p className="mt-6 text-white/50 text-lg font-light tracking-widest">
            {displayPhone}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
