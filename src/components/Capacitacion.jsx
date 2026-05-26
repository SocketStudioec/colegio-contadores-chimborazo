import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Calendar, Clock, MapPin, Users, ArrowUpRight } from 'lucide-react'

const cursos = [
  {
    categoria: 'Tributación',
    titulo: 'Actualización Tributaria 2026: Reformas del SRI',
    fecha: '14 de junio, 2026',
    duracion: '16 horas',
    modalidad: 'Presencial',
    lugar: 'Auditorio del Colegio — Riobamba',
    cupos: '40 cupos',
    precio: '$45',
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fit=crop',
  },
  {
    categoria: 'NIIF',
    titulo: 'NIIF para PYMES: Casos Prácticos Aplicados',
    fecha: '21 de junio, 2026',
    duracion: '8 horas',
    modalidad: 'Virtual',
    lugar: 'Plataforma Zoom',
    cupos: '80 cupos',
    precio: '$30',
    destacado: false,
    imagen: null,
  },
  {
    categoria: 'Laboral',
    titulo: 'Nómina y Seguridad Social: Cambios 2026',
    fecha: '5 de julio, 2026',
    duracion: '12 horas',
    modalidad: 'Híbrido',
    lugar: 'Auditorio + Zoom',
    cupos: '60 cupos',
    precio: '$40',
    destacado: false,
    imagen: null,
  },
  {
    categoria: 'Auditoría',
    titulo: 'Auditoría Financiera basada en Riesgos',
    fecha: '19 de julio, 2026',
    duracion: '24 horas',
    modalidad: 'Presencial',
    lugar: 'Auditorio del Colegio — Riobamba',
    cupos: '35 cupos',
    precio: '$80',
    destacado: false,
    imagen: null,
  },
]

const categoriaColor = {
  'Tributación': 'bg-copper-100 text-copper-600',
  'NIIF': 'bg-forest-100 text-forest-600',
  'Laboral': 'bg-blue-50 text-blue-600',
  'Auditoría': 'bg-amber-50 text-amber-700',
}

export default function Capacitacion() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="capacitacion" className="py-24 bg-cream-100" ref={ref}>
      <div className="max-w-content mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-[2px] bg-copper-400" />
              <span className="text-xs font-mono text-copper-500 uppercase tracking-[0.18em]">Capacitación profesional</span>
            </div>
            <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-forest-800 leading-tight tracking-[-0.02em]">
              Programa de formación<br />
              <em className="font-medium not-italic">segundo semestre 2026</em>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex items-center gap-2 text-sm text-forest-600 hover:text-forest-700 font-medium"
          >
            Ver calendario completo
            <ArrowUpRight size={15} />
          </motion.button>
        </div>

        {/* Curso destacado */}
        {cursos.filter(c => c.destacado).map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mb-6 grid md:grid-cols-[1fr_360px] rounded-2xl overflow-hidden border border-cream-300 bg-cream-50"
          >
            <div className="p-8 lg:p-10">
              <span className={`inline-block px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider mb-4 ${categoriaColor[c.categoria]}`}>
                {c.categoria}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-medium text-forest-800 mb-6 leading-tight">
                {c.titulo}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Calendar, text: c.fecha },
                  { icon: Clock, text: c.duracion },
                  { icon: MapPin, text: c.lugar },
                  { icon: Users, text: c.cupos },
                ].map(({ icon: Icon, text }, j) => (
                  <div key={j} className="flex items-center gap-2.5 text-sm text-forest-500">
                    <Icon size={14} className="text-copper-400 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button className="px-5 py-2.5 bg-forest-700 hover:bg-forest-800 text-cream-100 text-sm font-medium rounded transition-colors">
                  Inscribirme ahora
                </button>
                <p className="text-2xl font-display text-forest-700 font-semibold">{c.precio}</p>
              </div>
            </div>
            <div className="relative hidden md:block bg-forest-800">
              <img
                src={c.imagen}
                alt={c.titulo}
                className="w-full h-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute top-6 right-6 px-3 py-1.5 bg-copper-400 rounded text-cream-50 text-xs font-mono uppercase tracking-wider">
                Destacado
              </div>
            </div>
          </motion.div>
        ))}

        {/* Lista de cursos */}
        <div className="space-y-3">
          {cursos.filter(c => !c.destacado).map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + i * 0.07 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-cream-50 border border-cream-300 rounded-xl hover:border-forest-700/20 hover:bg-cream-100 transition-colors group cursor-pointer"
            >
              <span className={`self-start sm:self-auto px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider flex-shrink-0 ${categoriaColor[c.categoria]}`}>
                {c.categoria}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-forest-800 text-sm mb-1 group-hover:text-forest-700">{c.titulo}</h4>
                <div className="flex flex-wrap gap-4 text-xs text-forest-400">
                  <span className="flex items-center gap-1"><Calendar size={11} />{c.fecha}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{c.duracion}</span>
                  <span className="flex items-center gap-1"><MapPin size={11} />{c.modalidad}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <p className="font-display text-lg font-semibold text-forest-700">{c.precio}</p>
                <button className="px-4 py-2 border border-forest-700/30 text-forest-700 text-xs font-medium rounded hover:bg-forest-700 hover:text-cream-100 transition-colors">
                  Inscribirse
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
