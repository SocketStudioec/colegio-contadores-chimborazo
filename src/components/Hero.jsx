import { motion } from 'framer-motion'
import { ArrowRight, Award } from 'lucide-react'
import LogoMark from './LogoMark'

const stats = [
  { value: '70+', label: 'Años de trayectoria' },
  { value: '1.200+', label: 'Profesionales colegiados' },
  { value: '48', label: 'Cursos anuales' },
  { value: '100%', label: 'Cobertura provincial' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-cream-200" aria-label="Portada principal">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #0F1520 0px, #0F1520 1px, transparent 1px, transparent 64px),
                            repeating-linear-gradient(90deg, #0F1520 0px, #0F1520 1px, transparent 1px, transparent 64px)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-6 pt-16 pb-0 lg:pt-20">
        <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">

          {/* Left — editorial text */}
          <div className="pt-4">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-8">
              <div className="w-8 h-[2px] bg-gold-400" />
              <span className="text-xs font-mono text-gold-500 uppercase tracking-[0.18em]">
                Desde 1952 · Riobamba, Ecuador
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="font-display text-[3.2rem] sm:text-[3.8rem] lg:text-[4.4rem] font-light text-navy-800 leading-[1.05] tracking-[-0.02em] mb-6 text-balance"
            >
              El gremio contable
              <br />
              de <em className="font-medium not-italic text-navy-700">Chimborazo</em>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-navy-500 text-lg leading-relaxed max-w-[520px] mb-10"
            >
              Agrupamos a los profesionales de la contabilidad de la provincia para impulsar
              su desarrollo, defender el ejercicio profesional y elevar los estándares
              de la práctica contable en el Ecuador.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3">
              <button
                onClick={() => handleNav('#afiliacion')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-800 hover:bg-navy-900 text-cream-100 font-medium rounded transition-colors"
              >
                Afiliarme al Colegio
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleNav('#servicios')}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-navy-800/30 text-navy-700 hover:bg-navy-800/5 font-medium rounded transition-colors"
              >
                Ver servicios
              </button>
            </motion.div>

            {/* Certification badge */}
            <motion.div
              {...fadeUp(0.32)}
              className="mt-10 inline-flex items-center gap-3 px-4 py-3 bg-cream-100 border border-cream-300 rounded"
            >
              <Award size={18} className="text-gold-500 flex-shrink-0" />
              <p className="text-xs text-navy-600 leading-snug">
                <strong className="text-navy-700">Afiliado al CCPE</strong>
                {' '}· Colegio de Contadores Públicos del Ecuador
              </p>
            </motion.div>
          </div>

          {/* Right — logo medallion + photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-t-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=960&q=80&fit=crop&crop=faces"
                alt="Profesional contador en su oficina"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Dark overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-navy-900/80 backdrop-blur-sm px-5 py-4">
                <p className="text-cream-200 text-xs font-mono uppercase tracking-wider opacity-70 mb-1">Presidente</p>
                <p className="text-cream-100 font-display text-base font-medium">Jhonny Coronel</p>
              </div>
            </div>

            {/* Logo medallion floating card */}
            <div className="absolute -left-10 top-1/3 bg-cream-50 border border-cream-300 shadow-navy rounded-xl p-4 hidden lg:flex flex-col items-center gap-2">
              <LogoMark size={72} />
              <p className="text-[10px] font-mono text-navy-400 uppercase tracking-wider text-center leading-tight">
                Desde<br />1952
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-16 border-t border-navy-800/10 grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-6 px-6 ${i > 0 ? 'border-l border-navy-800/10' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''}`}
            >
              <p className="font-display text-3xl font-semibold text-navy-800">{s.value}</p>
              <p className="text-sm text-navy-400 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
