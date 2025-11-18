import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const whatsappHref = () => {
    const number = "+5511999999999"; // Altere para o seu número
    const text = encodeURIComponent(`Olá! Meu nome é ${name}. Tenho um negócio (${business}). ${message}`);
    return `https://wa.me/${number}?text=${text}`;
  };

  return (
    <section id="contato" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Vamos conversar?</h2>
          <p className="mt-3 text-slate-300 text-center">Me conte sobre seu projeto e receba um orçamento sem compromisso</p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-400" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Seu WhatsApp" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-400" />
            <input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Tipo de negócio (ex: Pizzaria)" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-400 md:col-span-2" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Fale sobre o que você precisa" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-400 md:col-span-2" rows={4} />
          </div>

          <div className="mt-6 flex justify-center">
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold shadow-lg shadow-green-600/30">
              Enviar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
