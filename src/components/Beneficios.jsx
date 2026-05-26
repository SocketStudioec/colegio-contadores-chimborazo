import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Check, Star } from 'lucide-react'

const beneficios = [
  'Carné profesional habilitante para ejercer la contabilidad',
  'Descuentos en cursos, seminarios y diplomados',
  'Acceso a biblioteca técnica y normativa actualizada',
  'Seguro de accidentes y asistencia médica básica',
  'Red de contactos con más de 1.200 profesionales',
  'Representación legal ante entidades del Estado',
  'Boletín tributario mensual con novedades normativas',
  'Plataforma de bolsa de empleo y consultoría',
  'Reconocimiento en el Día del Contador Ecuatoriano',
  'Participación con voz y voto en Asamblea General',
]

const planes = [
  {
    nombre: 'Afiliación Regular',
    descripcion: 'Para contadores con título universitario o tecnológico registrado.',
    precio: '$60',
    periodo: 'por año',
    color: 'border-cream-300 bg-cream-50',
    btnStyle: 'border border-forest-700/30 text-forest-700 hover:bg-forest-700 hover:text-cream-100',
  },
  {
    nombre: 'Afiliación Adherente',
    descripcion: 'Para estudiantes de últimos ciclos de contabilidad y afines.',
    precio: '$30',
    periodo: 'por año',
    color: 'border-forest-700 bg-forest-700',
    dark: true,
    btnStyle: 'bg-copper-400 hover:bg-copper-500 text-cream-50',
    badge: 'Recomendado',
  },
]

export default function Beneficios() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="beneficios" className="py-24 bg-cream-100" ref={ref}>
      <div className="max-w-content mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-[2px] bg-copper-400" />
            <span className="text-xs font-mono text-copper-500 uppercase tracking-[0.18em]">Beneficios para afiliados</span>
          </div>
          <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-forest-800 leading-tight tracking-[-0.02em]">
            Todo lo que ganas al<br />
            <em className="font-medium not-italic">formar parte del Colegio</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">

          {/* Lista de beneficios */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {beneficios.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                  className="flex items-start gap-3 py-4 border-b border-cream-300"
                >
                  <div className="w-5 h-5 rounded-full bg-forest-700/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-forest-600" strokeWidth={2.5} />
                  </div>
                  <p className="text-forest-600 text-sm leading-snug">{b}</p>
                </motion.div>
              ))}
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 rounded-2xl overflow-hidden relative"
              style={{ aspectRatio: '16/7' }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80&fit=crop"
                alt="Reunión de contadores profesionales"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest-900/40" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-cream-200 text-sm font-mono uppercase tracking-wider mb-1">Comunidad profesional</p>
                <p className="text-cream-100 font-display text-xl font-medium">
                  Más de 1.200 contadores chimboracenses unidos
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Planes de afiliación */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 }}
              className="text-xs font-mono text-forest-400 uppercase tracking-wider mb-6"
            >
              Planes de afiliación
            </motion.p>

            {planes.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
                className={`rounded-2xl border p-8 relative ${p.color}`}
              >
                {p.badge && (
                  <div className="absolute -top-3 right-6 flex items-center gap-1.5 px-3 py-1 bg-copper-400 rounded-full">
                    <Star size={10} className="text-cream-50" fill="currentColor" />
                    <span className="text-cream-50 text-[11px] font-mono uppercase tracking-wider">{p.badge}</span>
                  </div>
                )}
                <p className={`text-[11px] font-mono uppercase tracking-wider mb-2 ${p.dark ? 'text-cream-400' : 'text-copper-500'}`}>
                  {p.nombre}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${p.dark ? 'text-cream-300' : 'text-forest-500'}`}>
                  {p.descripcion}
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className={`font-display text-4xl font-semibold ${p.dark ? 'text-cream-100' : 'text-forest-800'}`}>
                    {p.precio}
                  </span>
                  <span className={`text-sm ${p.dark ? 'text-cream-400' : 'text-forest-400'}`}>{p.periodo}</span>
                </div>
                <button
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${p.btnStyle}`}
                >
                  Solicitar afiliación
                </button>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
              className="text-xs text-forest-400 text-center pt-2"
            >
              La cuota de afiliación incluye todos los beneficios listados.
              <br />Consulta en secretaría por excepciones y convenios vigentes.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
