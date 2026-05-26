import { ExternalLink, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const navColumns = [
  {
    titulo: 'Institución',
    links: [
      { label: 'Quiénes somos', href: '#nosotros' },
      { label: 'Directiva', href: '#directiva' },
      { label: 'Historia', href: '#nosotros' },
      { label: 'Valores y misión', href: '#nosotros' },
    ],
  },
  {
    titulo: 'Servicios',
    links: [
      { label: 'Capacitación', href: '#capacitacion' },
      { label: 'Afiliación', href: '#afiliacion' },
      { label: 'Certificados', href: '#servicios' },
      { label: 'Asesoría normativa', href: '#servicios' },
    ],
  },
  {
    titulo: 'Información',
    links: [
      { label: 'Noticias', href: '#noticias' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Calendario de cursos', href: '#capacitacion' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-forest-900 text-cream-300">
      {/* Main footer */}
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
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
                <p className="text-[10px] font-mono text-copper-400 uppercase tracking-widest leading-none">Colegio de</p>
                <p className="text-cream-100 font-display font-semibold text-sm leading-tight">Contadores de Chimborazo</p>
              </div>
            </div>

            <p className="text-sm text-cream-400 leading-relaxed mb-6 max-w-xs">
              Gremio profesional de los contadores de la provincia de Chimborazo.
              Riobamba, Ecuador. Desde 1952.
            </p>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-cream-400">
                <MapPin size={14} className="text-copper-400 flex-shrink-0 mt-0.5" />
                <span>Virgilio Corral y José María Banderas<br />Urb. Las Retamas, Riobamba</span>
              </div>
              <div className="flex items-center gap-2.5 text-cream-400">
                <Phone size={14} className="text-copper-400" />
                <a href="tel:032306007" className="hover:text-cream-200 transition-colors">03-2306007</a>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://www.facebook.com/Col.Cont.Chimborazo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream-400 hover:text-cream-200 transition-colors"
                aria-label="Facebook del Colegio de Contadores de Chimborazo"
              >
                <ExternalLink size={15} className="text-copper-400" />
                <span>Facebook</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid sm:grid-cols-3 gap-8">
            {navColumns.map((col, i) => (
              <div key={i}>
                <p className="text-[11px] font-mono text-copper-400 uppercase tracking-wider mb-4">{col.titulo}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <button
                        onClick={() => handleNav(link.href)}
                        className="text-sm text-cream-400 hover:text-cream-200 transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-700/40">
        <div className="max-w-content mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-cream-600 font-mono">
            © 2026 Colegio de Contadores de Chimborazo. RUC 0691701816001
          </p>
          <p className="text-xs text-cream-600">
            Afiliado al{' '}
            <a
              href="https://ccpp.org.ec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-400 hover:text-cream-300 transition-colors"
            >
              CCPE
            </a>
            {' '}· Colegio de Contadores Públicos del Ecuador
          </p>
        </div>
      </div>
    </footer>
  )
}
