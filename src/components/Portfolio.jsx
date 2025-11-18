const projects = [
  {
    title: "Clínica Odontológica Sorriso+",
    category: "Saúde",
    image: "/portfolio/dentista.jpg",
    link: "#",
    tags: ["Agendamento", "WhatsApp", "Landing Page"],
  },
  {
    title: "Academia FitPro",
    category: "Fitness",
    image: "/portfolio/academia.jpg",
    link: "#",
    tags: ["Planos", "Blog", "Leads"],
  },
  {
    title: "Pizzaria La Nonna",
    category: "Alimentação",
    image: "/portfolio/pizzaria.jpg",
    link: "#",
    tags: ["Cardápio", "Delivery", "Redes Sociais"],
  },
  {
    title: "Consultoria Financeira Alfa",
    category: "Serviços",
    image: "/portfolio/consultoria.jpg",
    link: "#",
    tags: ["Autoridade", "Captura de Leads"],
  },
  {
    title: "Pet Shop Amigo Fiel",
    category: "Pets",
    image: "/portfolio/petshop.jpg",
    link: "#",
    tags: ["Produtos", "Agendamento", "Maps"],
  },
  {
    title: "Salão de Beleza Glam",
    category: "Beleza",
    image: "/portfolio/salao.jpg",
    link: "#",
    tags: ["Portfólio", "Reservas", "Instagram"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Portfólio</h2>
            <p className="mt-2 text-slate-300">Alguns projetos recentes que entreguei</p>
          </div>
          <a href="#contato" className="hidden md:inline-block px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white">Quero um site assim</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover group-hover:scale-[1.02] transition" />
              <div className="p-4">
                <div className="text-xs text-blue-300/80">{p.category}</div>
                <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800/60 text-slate-200 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
