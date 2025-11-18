import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="logo" className="w-8 h-8" />
            <span className="text-white font-semibold">Meu Portfólio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
            <button onClick={() => scrollTo("portfolio")} className="hover:text-white transition">Portfólio</button>
            <button onClick={() => scrollTo("servicos")} className="hover:text-white transition">Serviços</button>
            <button onClick={() => scrollTo("processo")} className="hover:text-white transition">Processo</button>
            <button onClick={() => scrollTo("depoimentos")} className="hover:text-white transition">Depoimentos</button>
            <button onClick={() => scrollTo("contato")} className="hover:text-white transition">Contato</button>
          </nav>

          <div className="hidden md:block">
            <button onClick={() => scrollTo("contato")} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30">
              Solicitar Orçamento
            </button>
          </div>

          <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-slate-200">
              <button onClick={() => scrollTo("portfolio")} className="text-left px-2 py-2 rounded hover:bg-white/5">Portfólio</button>
              <button onClick={() => scrollTo("servicos")} className="text-left px-2 py-2 rounded hover:bg-white/5">Serviços</button>
              <button onClick={() => scrollTo("processo")} className="text-left px-2 py-2 rounded hover:bg-white/5">Processo</button>
              <button onClick={() => scrollTo("depoimentos")} className="text-left px-2 py-2 rounded hover:bg-white/5">Depoimentos</button>
              <button onClick={() => scrollTo("contato")} className="text-left px-2 py-2 rounded hover:bg-white/5">Contato</button>
              <button onClick={() => scrollTo("contato")} className="mt-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium">Solicitar Orçamento</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
