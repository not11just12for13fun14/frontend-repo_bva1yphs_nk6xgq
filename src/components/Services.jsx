import { Smartphone, MonitorSmartphone, ShoppingCart, MessageSquare } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Site Institucional",
    desc: "Página profissional para apresentar sua marca, serviços e diferenciais.",
    price: "a partir de R$ 1.490",
  },
  {
    icon: ShoppingCart,
    title: "Catálogo/Delivery",
    desc: "Exiba produtos, cardápio e receba pedidos pelo WhatsApp.",
    price: "a partir de R$ 1.990",
  },
  {
    icon: Smartphone,
    title: "Landing Page",
    desc: "Página única focada em conversão para campanhas e anúncios.",
    price: "a partir de R$ 990",
  },
  {
    icon: MessageSquare,
    title: "Manutenção",
    desc: "Atualizações, melhorias e suporte mensal para seu site atual.",
    price: "planos sob medida",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Serviços</h2>
        <p className="mt-3 text-slate-300 text-center">Soluções sob medida para o seu negócio</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, price }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 text-slate-200 font-medium">{price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
