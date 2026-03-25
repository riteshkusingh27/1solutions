import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Portfolio from './components/Portfolio'
import FinalCTA from './components/FinalCTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingContacts from './components/FloatingContacts'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen text-slate-900 bg-transparent pb-1">

      <div className="relative overflow-hidden">
      
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl" aria-hidden />
        <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-10 pt-6 header-neon sm:pb-2 md:pb-1">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger on the left */}
              <button
                type="button"
                aria-label="Toggle menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent opacity-70 text-slate-900 transition active:scale-[0.97] md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-4 w-4 flex-col justify-between">
                <span className="h-[2px] w-full rounded-sm bg-slate-900" />
                <span className="h-[2px] w-full rounded-sm bg-slate-900" />
                <span className="h-[2px] w-full rounded-sm bg-slate-900" />
              </span>
            </button>

            <div className="flex items-center gap-1">
              <img
                src="/logo.png"
                alt="OneSolutions Studio logo"
                className="h-16 w-16 rounded-2xl object-contain drop-shadow-glow"
              />
              <div>
                <p className="font-Mulish text-2xl font-extrabold text-slate-900">One Solutions</p>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link className="font-semibold text-[#0b1c3d] hover:text-[#0891b2] px-4 py-2 transition border-0 rounded-none shadow-none bg-transparent" to="/#services">
              View services
            </Link>
            <Link className="font-semibold text-[#0b1c3d] hover:text-[#0891b2] px-4 py-2 transition border-0 rounded-none shadow-none bg-transparent" to="/portfolio">
              Portfolio
            </Link>
            <Link className="btn-primary" to="/#contact">
              Start a project
            </Link>
          </div>
        </div>

        {/* Mobile slide-in menu from left */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 max-w-[80%] transform bg-white/55 p-5 shadow-lg backdrop-blur-xl border border-white/40 transition-transform duration-300 md:hidden ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-700">Menu</p>
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Link className="font-semibold text-[#0b1c3d] hover:text-[#0891b2] w-full justify-center px-4 py-2 transition border-0 rounded-none shadow-none bg-transparent" to="/#services" onClick={() => setMenuOpen(false)}>
              View services
            </Link>
            <Link className="font-semibold text-[#0b1c3d] hover:text-[#0891b2] w-full justify-center px-4 py-2 transition border-0 rounded-none shadow-none bg-transparent" to="/portfolio" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Link>
            <Link className="btn-primary w-full justify-center rounded-none" to="/#contact" onClick={() => setMenuOpen(false)}>
              Start a project
            </Link>
          </div>
        </div>
        {menuOpen && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/30 md:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SocialProof />
              <Services />
              <Process />
              <WhyChooseUs />
              <FinalCTA />
              <ContactForm />
              <Footer />
              <FloatingContacts />
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <Portfolio />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </div>
  )
}

export default App
