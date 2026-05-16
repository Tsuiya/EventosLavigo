"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

export default function ServiceCard({ title, description, href, imageUrl }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[400px] w-full overflow-hidden bg-lavigo-dark rounded-2xl"
      style={{ perspective: 1000 }}
    >
      <Link href={href} className="block h-full w-full">
        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-40"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
          <h3 className="font-serif text-3xl text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
            {title}
          </h3>
          <p className="text-white/80 font-light mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center text-lavigo-gold font-medium opacity-0 transform translate-y-4 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
            Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
