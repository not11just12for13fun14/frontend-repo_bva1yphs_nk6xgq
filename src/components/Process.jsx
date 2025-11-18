const steps = [
  {
    n: 1,
    title: "Briefing e estratégia",
    desc: "Entendo seus objetivos, público e diferenciais para definir a melhor abordagem.",
  },
  { n: 2, title: "Design", desc: "Crio o layout com foco em identidade visual, experiência e conversão." },
  { n: 3, title: "Desenvolvimento", desc: "Transformo o design em um site rápido, seguro e responsivo." },
  { n: 4, title: "Publicação e suporte", desc: "Lanço seu site e acompanho com melhorias contínuas." },
];

export default function Process() {
  return (
    <section id="processo" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Como funciona</h2>
        <p className="mt-3 text-slate-300 text-center">Um processo simples e transparente</p>

        <div className="mt-10 grid gap-6">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 items-start rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
                {s.n}
              </div>
              <div>
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="text-slate-300 mt-1 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
