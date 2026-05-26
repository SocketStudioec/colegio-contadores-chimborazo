import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const tabs = [
  {
    id: 'historia',
    label: 'Historia',
    content: {
      heading: 'Más de siete décadas de gremio profesional',
      body: `El Colegio de Contadores de Chimborazo fue fundado en la ciudad de Riobamba con el propósito de agrupar y representar a los profesionales de la contabilidad de la provincia. A lo largo de su historia, la institución ha crecido junto a la economía local, formando parte activa del desarrollo empresarial y público de Chimborazo.

Desde sus primeros años, el Colegio estableció canales de capacitación continua y defensa del ejercicio profesional, consolidándose como un referente gremial en la región sierra-centro del Ecuador.`,
    },
  },
  {
    id: 'mision',
    label: 'Misión',
    content: {
      heading: 'Impulsamos la excelencia contable en Chimborazo',
      body: `Liderar el mejoramiento continuo de los contadores a través de servicios de calidad, capacitación permanente y la defensa del ejercicio profesional, contribuyendo al desarrollo económico y social de la provincia de Chimborazo y del Ecuador.

Garantizamos el cumplimiento de los estándares éticos y técnicos de la profesión contable, promoviendo la actualización permanente ante los cambios normativos tributarios, contables y laborales del país.`,
    },
  },
  {
    id: 'vision',
    label: 'Visión',
    content: {
      heading: 'Ser el referente gremial contable de la región',
      body: `Consolidarnos como el gremio más representativo e influyente de los contadores de Chimborazo, reconocido a nivel nacional por la calidad de sus programas de formación, la solidez institucional y el compromiso con la ética profesional.

Aspiramos a ser la institución que conecta a los contadores con las oportunidades del mercado laboral, la actualización normativa y el crecimiento profesional continuo.`,
    },
  },
  {
    id: 'valores',
    label: 'Valores',
    content: {
      heading: 'Los principios que guían nuestra institución',
      body: `Ética e integridad: actuamos con transparencia y honestidad en cada acción institucional y profesional.

Excelencia: promovemos la superación continua y los más altos estándares en el ejercicio de la contabilidad.

Solidaridad: apoyamos a nuestros afiliados en cada etapa de su desarrollo profesional y personal.

Responsabilidad: cumplimos con nuestros compromisos hacia los colegiados, la sociedad y las instituciones del Estado.`,
    },
  },
]

export default function SobreNosotros() {
  const [activeTab, setActiveTab] = useState('historia')
  const { ref, inView } = useInView(0.15)

  const current = tabs.find(t => t.id === activeTab)

  return (
    <section id="nosotros" className="py-24 bg-forest-700" ref={ref}>
      <div className="max-w-content mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-[2px] bg-copper-400" />
            <span className="text-xs font-mono text-copper-400 uppercase tracking-[0.18em]">Quiénes somos</span>
          </div>
          <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-cream-100 leading-tight tracking-[-0.02em]">
            Una institución al servicio<br />
            <em className="font-medium not-italic text-cream-200">del contador chimboracense</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">

          {/* Tab navigation */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="flex flex-col gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-5 py-3.5 rounded font-medium text-sm transition-colors relative ${
                    activeTab === tab.id
                      ? 'bg-cream-200 text-forest-800'
                      : 'text-cream-300 hover:text-cream-100 hover:bg-forest-600'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tabIndicator"
                      className="absolute left-0 top-2 bottom-2 w-0.5 bg-copper-400 rounded-full"
                    />
                  )}
                  <span className="pl-2">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Image */}
            <div className="mt-8 rounded-xl overflow-hidden hidden lg:block" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=640&q=80&fit=crop"
                alt="Sala de sesiones del Colegio de Contadores"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pt-1"
            >
              <h3 className="font-display text-2xl lg:text-3xl font-medium text-cream-100 leading-tight mb-6 text-balance">
                {current.content.heading}
              </h3>
              <div className="space-y-4">
                {current.content.body.split('\n\n').map((para, i) => (
                  <p key={i} className="text-cream-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Pull quote */}
              {activeTab === 'historia' && (
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-10 pl-6 border-l-2 border-copper-400"
                >
                  <p className="font-display text-xl italic text-cream-200 leading-snug mb-3">
                    "Trabajamos cada día para que el contador chimboracense
                    sea reconocido por su excelencia profesional."
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-forest-500 flex-shrink-0 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&q=80&fit=crop&crop=faces"
                        alt="Jhonny Coronel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-cream-100 text-sm font-medium">Jhonny Coronel</p>
                      <p className="text-cream-400 text-xs font-mono">Presidente del Colegio</p>
                    </div>
                  </footer>
                </motion.blockquote>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
