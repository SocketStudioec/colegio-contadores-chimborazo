import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import LogoMark from './LogoMark'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Directiva', href: '#directiva' },
  { label: 'Capacitación', href: '#capacitacion' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-800 text-cream-200 text-xs font-mono hidden md:block">
        <div className="max-w-content mx-auto px-6 py-2 flex justify-between items-center">
          <span className="opacity-60">Riobamba, Chimborazo — Ecuador</span>
          <div className="flex items-center gap-6">
            <a
              href="tel:032306007"
              className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity"
            >
              <Phone size={11} />
              <span>03-2306007</span>
            </a>
            <a
              href="https://www.facebook.com/Col.Cont.Chimborazo"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/98 backdrop-blur-sm shadow-navy border-b border-cream-300'
            : 'bg-cream-50/95 backdrop-blur-sm border-b border-cream-300/60'
        }`}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo / Brand */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label="Inicio — Colegio de Contadores de Chimborazo"
            >
              <LogoMark size={42} />
              <div className="leading-tight hidden sm:block">
                <p className="text-[10px] font-mono text-gold-500 uppercase tracking-[0.18em] leading-none">
                  Colegio de
                </p>
                <p className="text-navy-800 font-display font-semibold text-[15px] leading-tight">
                  Contadores de Chimborazo
                </p>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-3.5 py-2 text-sm text-navy-600 hover:text-navy-800 hover:bg-navy-50 rounded transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#afiliacion')}
                className="ml-3 px-4 py-2 bg-navy-800 hover:bg-navy-900 text-cream-100 text-sm font-medium rounded transition-colors"
              >
                Afiliarme
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-navy-800 hover:bg-navy-50 rounded transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden border-t border-cream-300 bg-cream-50"
            >
              <div className="max-w-content mx-auto px-6 py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-left px-4 py-3 text-navy-700 hover:bg-navy-50 rounded text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('#afiliacion')}
                  className="mt-2 px-4 py-3 bg-navy-800 text-cream-100 text-sm font-medium rounded text-center hover:bg-navy-900 transition-colors"
                >
                  Afiliarme al Colegio
                </button>
                <div className="mt-3 pt-3 border-t border-cream-300 flex items-center gap-2 text-xs text-navy-400 font-mono">
                  <Phone size={11} />
                  <span>03-2306007</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
