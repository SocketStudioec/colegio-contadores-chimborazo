import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowRight, FileCheck, UserPlus, CreditCard, CheckCircle } from 'lucide-react'

const pasos = [
  {
    icon: FileCheck,
    numero: '01',
    titulo: 'Reúne tus documentos',
    desc: 'Cédula, título universitario, foto tamaño carné y certificado de votación.',
  },
  {
    icon: UserPlus,
    numero: '02',
    titulo: 'Solicita tu afiliación',
    desc: 'Presenta tu solicitud en secretaría del Colegio o comunícate al 03-2306007.',
  },
  {
    icon: CreditCard,
    numero: '03',
    titulo: 'Cancela la cuota',
    desc: 'Cuota anual de afiliación en caja o mediante transferencia bancaria.',
  },
  {
    icon: CheckCircle,
    numero: '04',
    titulo: 'Recibe tu carné',
    desc: 'Tu carné profesional te habilitará para ejercer la contabilidad en la provincia.',
  },
]

export default function CTAAfiliacion() {
  const { ref, inView } = useInView(0.08)

  return (
    <section id="afiliacion" className="py-24 bg-navy-800" ref={ref}>
      <div className="max-w-content mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] items-start gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-[2px] bg-gold-400" />
              <span className="text-xs font-mono text-gold-400 uppercase tracking-[0.18em]">Proceso de afiliación</span>
            </div>
            <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-cream-100 leading-tight tracking-[-0.02em]">
              Cuatro pasos para ser<br />
              <em className="font-medium not-italic text-cream-200">parte del Colegio</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <p className="text-cream-400 text-sm max-w-xs leading-relaxed">
              El proceso es sencillo y puede completarse en un solo día.
              Nuestro equipo de secretaría te guiará en cada paso.
            </p>
          </motion.div>
        </div>

        {/* Pasos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-600/40 mb-16">
          {pasos.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="bg-navy-800 p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center">
                    <Icon size={18} className="text-cream-200" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] text-gold-400 tracking-wider">{p.numero}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-cream-100 mb-2 leading-snug">{p.titulo}</h3>
                <p className="text-cream-400 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 bg-cream-200 rounded-2xl"
        >
          <div>
            <p className="font-display text-2xl font-medium text-navy-800 mb-1">¿Listo para afiliarte?</p>
            <p className="text-navy-500 text-sm">
              Visítanos en Virgilio Corral y José María Banderas, Urb. Las Retamas, Riobamba.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:032306007"
              className="px-5 py-3 border border-navy-800/30 text-navy-700 text-sm font-medium rounded hover:bg-navy-800/5 transition-colors text-center"
            >
              Llamar: 03-2306007
            </a>
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-navy-800 hover:bg-navy-900 text-cream-100 text-sm font-medium rounded transition-colors"
            >
              Escribirnos <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
