import Image from "next/image";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Sobre Nós | Lavigo Produções",
  description: "Conheça a história de Daniel e Jaiane, fundadores da Lavigo Produções.",
};

export default function SobrePage() {
  return (
    <div className="pt-24 bg-background">
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drczznkji/image/upload/v1778903611/Daniel_Jaiane_lxw9w5.png"
                alt="Daniel e Jaiane trabalhando"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl mb-8 text-lavigo-dark">Muito prazer, somos Daniel e Jaiane.</h1>
              <div className="space-y-6 text-foreground/80 font-light text-lg leading-relaxed">
                <p>
                  A Lavigo nasceu de uma vontade inquieta: transformar a forma como as pessoas guardam suas memórias em Ibitinga e região. Nós sempre acreditamos que um evento não é feito apenas de decoração e vestidos bonitos, mas de pessoas e das conexões entre elas.
                </p>
                <p>
                  Percebemos que o mercado estava cheio de fotografias engessadas e vídeos burocráticos. Faltava alma. Faltava a lágrima contida do pai da noiva, o sorriso genuíno de uma criança no aniversário, o brilho no olho de quem realiza um sonho.
                </p>
                <p>
                  É por isso que a Lavigo existe. Para entregar um olhar autoral, sensível e cinematográfico. Não queremos que você apenas &quot;veja&quot; as suas fotos. Queremos que você reviva exatamente o que sentiu naquele dia.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-lavigo-dark/10">
                <h2 className="font-serif text-3xl mb-6 text-lavigo-dark">Nossos Pilares</h2>
                <ul className="space-y-4 text-foreground/80 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-lavigo-gold font-bold">01.</span>
                    <span><strong>Narrativa e emoção primeiro:</strong> A técnica serve à história, nunca o contrário.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lavigo-gold font-bold">02.</span>
                    <span><strong>Estética editorial:</strong> Tratamento e colorização com padrão de cinema.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lavigo-gold font-bold">03.</span>
                    <span><strong>Cuidado humano:</strong> Criamos um ambiente onde você se sente à vontade para ser você mesmo.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Vamos contar a sua história juntos?" />
    </div>
  );
}
