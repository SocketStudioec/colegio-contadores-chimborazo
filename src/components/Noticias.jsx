import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight, Calendar } from 'lucide-react'

const noticias = [
  {
    categoria: 'Institucional',
    titulo: 'Asamblea General Ordinaria 2026: resumen de acuerdos',
    fecha: '15 de mayo, 2026',
    resumen: 'La Asamblea General aprobó el presupuesto anual, el plan de capacitación y las resoluciones de gestión para el período 2026.',
    imagen: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800&q=80&fit=crop',
    destacado: true,
  },
  {
    categoria: 'Tributación',
    titulo: 'Nuevas reformas tributarias: lo que debe saber el contador',
    fecha: '8 de mayo, 2026',
    resumen: 'Análisis técnico de las últimas resoluciones del SRI que afectan directamente la práctica contable en el Ecuador.',
    imagen: null,
    destacado: false,
  },
  {
    categoria: 'Capacitación',
    titulo: 'Resultados del Congreso Provincial de Contadores 2026',
    fecha: '28 de abril, 2026',
    resumen: 'Más de 300 profesionales participaron en el congreso anual realizado en Riobamba, con ponentes nacionales e internacionales.',
    imagen: null,
    destacado: false,
  },
  {
    categoria: 'Gremial',
    titulo: 'Acuerdo con ESPOCH para programas de vinculación profesional',
    fecha: '20 de abril, 2026',
    resumen: 'El Colegio firma convenio con la Escuela Superior Politécnica de Chimborazo para pasantías y bolsa de empleo.',
    imagen: null,
    destacado: false,
  },
]

const categoriaStyle = {
  'Institucional': 'text-navy-600',
  'Tributación':   'text-gold-600',
  'Capacitación':  'text-blue-600',
  'Gremial':       'text-amber-700',
}

export default function Noticias() {
  const { ref, inView } = useInView(0.08)

  const principal = noticias.find(n => n.destacado)
  const secundarias = noticias.filter(n => !n.destacado)

  return (
    <section id="noticias" className="py-24 bg-cream-200" ref={ref}>
      <div className="max-w-content mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-[2px] bg-gold-400" />
              <span className="text-xs font-mono text-gold-500 uppercase tracking-[0.18em]">Noticias gremiales</span>
            </div>
            <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-navy-800 leading-tight tracking-[-0.02em]">
              Al día con la<br />
              <em className="font-medium not-italic">vida institucional</em>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-sm text-navy-600 hover:text-navy-700 font-medium flex-shrink-0"
          >
            Todas las noticias <ArrowUpRight size={15} />
          </motion.button>
        </div>

        {/* Editorial layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Noticia principal */}
          {principal && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: '16/9' }}>
                <img
                  src={principal.imagen}
                  alt={principal.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[11px] font-mono uppercase tracking-wider ${categoriaStyle[principal.categoria]}`}>
                  {principal.categoria}
                </span>
                <span className="text-cream-400 text-xs">·</span>
                <span className="text-navy-400 text-xs flex items-center gap-1.5">
                  <Calendar size={11} />{principal.fecha}
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-medium text-navy-800 leading-tight mb-3 group-hover:text-navy-700 transition-colors text-balance">
                {principal.titulo}
              </h3>
              <p className="text-navy-500 text-sm leading-relaxed line-clamp-3">{principal.resumen}</p>
              <div className="mt-4 flex items-center gap-2 text-navy-600 text-sm font-medium">
                <span>Leer más</span><ArrowUpRight size={14} />
              </div>
            </motion.article>
          )}

          {/* Noticias secundarias */}
          <div className="space-y-0">
            {secundarias.map((n, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 + i * 0.08 }}
                className="group cursor-pointer py-5 border-b border-cream-300 last:border-b-0 hover:bg-cream-100 -mx-4 px-4 rounded transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[11px] font-mono uppercase tracking-wider ${categoriaStyle[n.categoria]}`}>
                    {n.categoria}
                  </span>
                  <span className="text-cream-400 text-xs">·</span>
                  <span className="text-navy-400 text-xs">{n.fecha}</span>
                </div>
                <h4 className="font-display text-base font-medium text-navy-800 leading-snug mb-2 group-hover:text-navy-700 transition-colors line-clamp-2">
                  {n.titulo}
                </h4>
                <p className="text-navy-400 text-xs leading-relaxed line-clamp-2">{n.resumen}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
