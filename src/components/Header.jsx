import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

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
      <div className="bg-forest-700 text-cream-200 text-xs font-mono hidden md:block">
        <div className="max-w-content mx-auto px-6 py-2 flex justify-between items-center">
          <span className="opacity-70">Riobamba, Chimborazo — Ecuador</span>
          <div className="flex items-center gap-6">
            <a href="tel:032306007" className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <Phone size={11} />
              <span>03-2306007</span>
            </a>
            <a
              href="https://www.facebook.com/Col.Cont.Chimborazo"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
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
            ? 'bg-cream-50/98 backdrop-blur-sm shadow-forest border-b border-cream-300'
            : 'bg-cream-50/95 backdrop-blur-sm border-b border-cream-300/60'
        }`}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label="Inicio"
            >
              <div className="w-9 h-9 bg-forest-700 rounded flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="2" rx="1" fill="#F5F0E8"/>
                  <rect x="2" y="9" width="10" height="2" rx="1" fill="#F5F0E8" opacity="0.8"/>
                  <rect x="2" y="14" width="13" height="2" rx="1" fill="#F5F0E8" opacity="0.6"/>
                  <circle cx="16" cy="14" r="3" fill="#A0612A"/>
                  <path d="M14.5 14L15.5 15L17.5 13" stroke="#F5F0E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-mono text-copper-500 uppercase tracking-widest leading-none">Colegio de</p>
                <p className="text-forest-700 font-display font-semibold text-[15px] leading-tight">Contadores de Chimborazo</p>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-3.5 py-2 text-sm text-forest-600 hover:text-forest-700 hover:bg-forest-50 rounded transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#afiliacion')}
                className="ml-3 px-4 py-2 bg-forest-700 hover:bg-forest-800 text-cream-100 text-sm font-medium rounded transition-colors"
              >
                Afiliarme
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-forest-700 hover:bg-forest-50 rounded transition-colors"
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
                    className="text-left px-4 py-3 text-forest-700 hover:bg-forest-50 rounded text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('#afiliacion')}
                  className="mt-2 px-4 py-3 bg-forest-700 text-cream-100 text-sm font-medium rounded text-center transition-colors hover:bg-forest-800"
                >
                  Afiliarme al Colegio
                </button>
                <div className="mt-3 pt-3 border-t border-cream-300 flex items-center gap-2 text-xs text-forest-500 font-mono">
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
