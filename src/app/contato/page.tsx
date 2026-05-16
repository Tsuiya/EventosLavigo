"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  eventType: z.string().min(1, "Selecione o tipo de evento"),
  eventDate: z.string().min(1, "Data é obrigatória"),
  city: z.string().min(2, "Cidade é obrigatória"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContatoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    // Formatar mensagem para WhatsApp
    const msg = `Olá! Gostaria de um orçamento.
Nome: ${data.name}
Evento: ${data.eventType}
Data: ${data.eventDate}
Cidade: ${data.city}
${data.message ? `Mensagem: ${data.message}` : ''}`;

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5516991609339";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    reset();
  };

  return (
    <div className="pt-24 bg-background min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="font-serif text-5xl mb-6">Fale Conosco</h1>
            <p className="text-foreground/70 text-lg font-light">
              Estamos ansiosos para ouvir sobre o seu evento. Preencha o formulário abaixo ou nos chame diretamente no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-black/5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-lavigo-dark mb-2">Nome Completo *</label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 bg-background border border-black/10 rounded-xl focus:outline-none focus:border-lavigo-gold transition-colors"
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-lavigo-dark mb-2">Tipo de Evento *</label>
                    <select
                      {...register("eventType")}
                      className="w-full px-4 py-3 bg-background border border-black/10 rounded-xl focus:outline-none focus:border-lavigo-gold transition-colors appearance-none"
                    >
                      <option value="">Selecione...</option>
                      <option value="Casamento">Casamento</option>
                      <option value="Aniversário">Aniversário</option>
                      <option value="Ensaio Externo">Ensaio Externo</option>
                      <option value="Corporativo">Corporativo</option>
                      <option value="Outro">Outro</option>
                    </select>
                    {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-lavigo-dark mb-2">Data do Evento *</label>
                    <input
                      type="date"
                      {...register("eventDate")}
                      className="w-full px-4 py-3 bg-background border border-black/10 rounded-xl focus:outline-none focus:border-lavigo-gold transition-colors"
                    />
                    {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-lavigo-dark mb-2">Cidade do Evento *</label>
                  <input
                    {...register("city")}
                    className="w-full px-4 py-3 bg-background border border-black/10 rounded-xl focus:outline-none focus:border-lavigo-gold transition-colors"
                    placeholder="Ex: Ibitinga, SP"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-lavigo-dark mb-2">Mensagem (Opcional)</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-black/10 rounded-xl focus:outline-none focus:border-lavigo-gold transition-colors resize-none"
                    placeholder="Conte-nos um pouco sobre como você imagina esse dia..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-lavigo-dark text-white font-medium py-4 px-8 rounded-full hover:bg-lavigo-gold transition-colors flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contato Info */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="font-serif text-3xl mb-6">Canais Diretos</h3>
                <div className="space-y-6">
                  <a href="https://wa.me/5516991609339" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-lavigo-gold transition-colors group">
                    <div className="w-12 h-12 bg-lavigo-dark text-white flex items-center justify-center rounded-full group-hover:bg-lavigo-gold transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="font-light">(16) 99160-9339</p>
                    </div>
                  </a>
                  
                  <a href="tel:+5516991609339" className="flex items-center gap-4 text-foreground/80 hover:text-lavigo-gold transition-colors group">
                    <div className="w-12 h-12 bg-lavigo-dark text-white flex items-center justify-center rounded-full group-hover:bg-lavigo-gold transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Telefone</p>
                      <p className="font-light">(16) 99160-9339</p>
                    </div>
                  </a>

                  <a href="mailto:contato@lavigoproducoes.com.br" className="flex items-center gap-4 text-foreground/80 hover:text-lavigo-gold transition-colors group">
                    <div className="w-12 h-12 bg-lavigo-dark text-white flex items-center justify-center rounded-full group-hover:bg-lavigo-gold transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">E-mail</p>
                      <p className="font-light">daniel@lavigo.com.br</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-3xl mb-6">Nossa Base</h3>
                <div className="flex items-start gap-4 text-foreground/80">
                  <div className="w-12 h-12 bg-lavigo-dark text-white flex items-center justify-center rounded-full shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Ibitinga, SP</p>
                    <p className="font-light max-w-xs">
                      Atendemos presencialmente em toda a região de Araraquara, Bauru, Jaú, Matão, Itápolis, Tabatinga e Catanduva. Disponíveis para viagens em todo o Brasil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
