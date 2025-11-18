export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-400/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Sites modernos que transformam visitantes em clientes
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Eu crio sites rápidos, responsivos e com foco em conversão para pequenos negócios. 
            Do design à publicação — tudo feito sob medida para aumentar suas vendas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contato" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30">Solicitar Orçamento</a>
            <a href="#portfolio" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold">Ver Portfólio</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-slate-300/90 text-sm">
            <div>
              <span className="text-white font-bold">+30</span> projetos entregues
            </div>
            <div>
              <span className="text-white font-bold">7 dias</span> em média por site
            </div>
            <div>
              <span className="text-white font-bold">Suporte</span> dedicado
            </div>
          </div>
        </div>

        <div className="relative">
          <img src="/hero-illustration.png" alt="Website preview" className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/20" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl bg-blue-500/20 blur-3xl" />
          <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
