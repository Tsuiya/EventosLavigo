import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lavigo-dark text-lavigo-light py-16 border-t border-white/10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <span className="font-serif text-3xl font-bold tracking-wider text-lavigo-gold">LAVIGO</span>
          </Link>
          <p className="text-white/60 text-sm max-w-xs text-balance">
            Cada momento merece ser lembrado do jeito que ele foi sentido. Fotografia e vídeo com narrativa autoral.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif text-xl mb-6 text-lavigo-gold">Links</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
            <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif text-xl mb-6 text-lavigo-gold">Serviços</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="/casamentos" className="hover:text-white transition-colors">Casamentos</Link></li>
            <li><Link href="/aniversarios" className="hover:text-white transition-colors">Aniversários</Link></li>
            <li><Link href="/ensaios" className="hover:text-white transition-colors">Ensaios Externos</Link></li>
            <li><Link href="/eventos-empresariais" className="hover:text-white transition-colors">Corporativo</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif text-xl mb-6 text-lavigo-gold">Contato</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-lavigo-gold" />
              <span>Ibitinga, SP <br/> Atendemos toda a região</span>
            </li>
            <li>
              <div className="flex gap-4 mt-6">
                <a href="https://instagram.com/lavigoprod" target="_blank" rel="noopener noreferrer" className="hover:text-lavigo-gold transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://facebook.com/lavigoprod" target="_blank" rel="noopener noreferrer" className="hover:text-lavigo-gold transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-custom mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Lavigo Produções. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
