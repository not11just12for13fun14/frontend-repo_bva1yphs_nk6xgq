const testimonials = [
  {
    name: "Ana Paula",
    role: "Clínica Sorriso+",
    text: "Profissional impecável! Nosso site ficou lindo, rápido e já está gerando mais agendamentos.",
  },
  {
    name: "João Martins",
    role: "Pizzaria La Nonna",
    text: "O novo site aumentou os pedidos pelo WhatsApp em 40%. Recomendo muito!",
  },
  {
    name: "Carla Souza",
    role: "Consultoria Alfa",
    text: "Entrega dentro do prazo e excelente suporte. Passamos mais credibilidade online.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Depoimentos</h2>
        <p className="mt-3 text-slate-300 text-center">O que os clientes dizem</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200 leading-relaxed">“{t.text}”</p>
              <div className="mt-4 text-sm text-slate-300">
                <span className="text-white font-medium">{t.name}</span> • {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
