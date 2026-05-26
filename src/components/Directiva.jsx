import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const directiva = [
  {
    nombre: 'Jhonny Coronel',
    cargo: 'Presidente',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&crop=faces',
    destacado: true,
  },
  {
    nombre: 'María Elena Paredes',
    cargo: 'Vicepresidenta',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&fit=crop&crop=faces',
    destacado: false,
  },
  {
    nombre: 'Carlos Alberto Freire',
    cargo: 'Secretario General',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=faces',
    destacado: false,
  },
  {
    nombre: 'Lorena Bucheli',
    cargo: 'Tesorera',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&fit=crop&crop=faces',
    destacado: false,
  },
  {
    nombre: 'Patricio Villavicencio',
    cargo: 'Vocal Principal',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop&crop=faces',
    destacado: false,
  },
  {
    nombre: 'Diana Morocho',
    cargo: 'Vocal Principal',
    foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&fit=crop&crop=faces',
    destacado: false,
  },
]

export default function Directiva() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="directiva" className="py-24 bg-cream-200" ref={ref}>
      <div className="max-w-content mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-[2px] bg-gold-400" />
            <span className="text-xs font-mono text-gold-500 uppercase tracking-[0.18em]">Directiva institucional</span>
          </div>
          <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-navy-800 leading-tight tracking-[-0.02em]">
            Quiénes lideran<br />
            <em className="font-medium not-italic">nuestra institución</em>
          </h2>
        </motion.div>

        {/* Presidente destacado */}
        {directiva.filter(d => d.destacado).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mb-12 grid md:grid-cols-[280px_1fr] gap-8 items-center bg-cream-100 rounded-2xl overflow-hidden border border-cream-300"
          >
            <div className="relative" style={{ aspectRatio: '1/1' }}>
              <img
                src={m.foto}
                alt={m.nombre}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-gold-400 rounded text-navy-900 text-[11px] font-mono uppercase tracking-wider font-semibold">
                Presidente
              </div>
            </div>
            <div className="p-8">
              <p className="text-xs font-mono text-gold-500 uppercase tracking-wider mb-2">
                Presidente del Colegio de Contadores de Chimborazo
              </p>
              <h3 className="font-display text-3xl font-medium text-navy-800 mb-4">{m.nombre}</h3>
              <p className="text-navy-500 leading-relaxed text-sm mb-6">
                Profesional de la contabilidad con amplia trayectoria en el ejercicio contable y la gestión gremial
                en la provincia de Chimborazo. Comprometido con el fortalecimiento institucional y la defensa
                de los derechos de los contadores chimboracenses.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-gold-300" />
                <span className="text-xs text-navy-400 font-mono">Período de gestión 2023–2026</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Resto de directiva */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {directiva.filter(d => !d.destacado).map((m, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + i * 0.08 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden mb-3" style={{ aspectRatio: '3/4' }}>
                <img
                  src={m.foto}
                  alt={m.nombre}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
              </div>
              <p className="text-[11px] font-mono text-gold-500 uppercase tracking-wider mb-0.5">{m.cargo}</p>
              <h4 className="font-display text-base font-medium text-navy-800 leading-snug">{m.nombre}</h4>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
