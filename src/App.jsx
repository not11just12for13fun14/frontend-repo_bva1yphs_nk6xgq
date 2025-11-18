import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="logo" className="w-6 h-6" />
            <span className="text-sm text-slate-300">© {new Date().getFullYear()} — Todos os direitos reservados</span>
          </div>
          <div className="text-sm text-slate-400">
            Feito sob medida para pequenos negócios
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
