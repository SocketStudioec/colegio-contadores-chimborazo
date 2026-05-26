import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { BookOpen, ShieldCheck, Users, Award, FileText, TrendingUp } from 'lucide-react'

const servicios = [
  {
    icon: BookOpen,
    numero: '01',
    titulo: 'Capacitación Continua',
    descripcion: 'Cursos, seminarios y talleres presenciales y virtuales en tributación, NIIF, auditoría, costos y normativa laboral vigente.',
  },
  {
    icon: ShieldCheck,
    numero: '02',
    titulo: 'Defensa Profesional',
    descripcion: 'Representación legal y gremial ante entidades del Estado para proteger el ejercicio profesional de nuestros afiliados.',
  },
  {
    icon: Award,
    numero: '03',
    titulo: 'Certificación y Colegiatura',
    descripcion: 'Tramitación de carné profesional, certificados de no adeudar y documentos de habilitación para el ejercicio contable.',
  },
  {
    icon: Users,
    numero: '04',
    titulo: 'Red Profesional',
    descripcion: 'Plataforma de networking que conecta a contadores con empresas, estudios contables y oportunidades laborales en la región.',
  },
  {
    icon: FileText,
    numero: '05',
    titulo: 'Asesoría Normativa',
    descripcion: 'Orientación técnica actualizada sobre cambios en el Código Tributario, normativas del SRI, IESS, Ministerio del Trabajo y más.',
  },
  {
    icon: TrendingUp,
    numero: '06',
    titulo: 'Desarrollo Institucional',
    descripcion: 'Programas de liderazgo, emprendimiento contable y herramientas digitales para modernizar la práctica profesional.',
  },
]

export default function Servicios() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="servicios" className="py-24 bg-cream-100" ref={ref}>
      <div className="max-w-content mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-[2px] bg-gold-400" />
              <span className="text-xs font-mono text-gold-500 uppercase tracking-[0.18em]">Nuestros servicios</span>
            </div>
            <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-navy-800 leading-tight tracking-[-0.02em]">
              Todo lo que necesitas<br />
              <em className="font-medium not-italic">para ejercer con excelencia</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-navy-400 text-base max-w-xs lg:text-right leading-relaxed hidden lg:block"
          >
            Servicios diseñados para acompañar al profesional
            contable en cada etapa de su carrera.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-300">
          {servicios.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
                className="bg-cream-100 p-8 group hover:bg-cream-50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 bg-navy-800/8 rounded-lg flex items-center justify-center group-hover:bg-navy-800/12 transition-colors">
                    <Icon size={20} className="text-navy-700" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] text-gold-500 tracking-wider">{s.numero}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-navy-800 mb-3 leading-snug">{s.titulo}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{s.descripcion}</p>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-navy-800 rounded-xl"
        >
          <div>
            <p className="text-cream-100 font-medium mb-1">¿Quieres acceder a todos estos beneficios?</p>
            <p className="text-cream-300 text-sm">Afilíate al Colegio de Contadores de Chimborazo y empieza hoy.</p>
          </div>
          <button
            onClick={() => document.querySelector('#afiliacion')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-navy-900 text-sm font-medium rounded transition-colors"
          >
            Proceso de afiliación
          </button>
        </motion.div>
      </div>
    </section>
  )
}
