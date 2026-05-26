import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Phone, Clock, ExternalLink, Send, CheckCircle } from 'lucide-react'

const inputClass =
  'w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg text-forest-800 text-sm placeholder:text-forest-300 focus:outline-none focus:ring-2 focus:ring-forest-700/30 focus:border-forest-700/50 transition-colors'

export default function Contacto() {
  const { ref, inView } = useInView(0.08)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    await new Promise(r => setTimeout(r, 1200))
    setEnviando(false)
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-24 bg-cream-200" ref={ref}>
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
            <span className="text-xs font-mono text-copper-500 uppercase tracking-[0.18em]">Contáctanos</span>
          </div>
          <h2 className="font-display text-[2.6rem] lg:text-[3.2rem] font-light text-forest-800 leading-tight tracking-[-0.02em]">
            Estamos aquí para<br />
            <em className="font-medium not-italic">ayudarte</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {enviado ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="w-12 h-12 bg-forest-700/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={24} className="text-forest-600" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-forest-800 mb-2">Mensaje enviado</h3>
                  <p className="text-forest-500 text-sm leading-relaxed">
                    Gracias por contactarnos. Nuestro equipo de secretaría
                    se comunicará contigo en un plazo máximo de 24 horas hábiles.
                  </p>
                </div>
                <button
                  onClick={() => { setEnviado(false); setForm({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' }) }}
                  className="text-sm text-forest-600 hover:text-forest-700 font-medium underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-mono text-forest-500 uppercase tracking-wider mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-forest-500 uppercase tracking-wider mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@correo.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-mono text-forest-500 uppercase tracking-wider mb-2">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="099 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="asunto" className="block text-xs font-mono text-forest-500 uppercase tracking-wider mb-2">
                      Asunto *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      required
                      value={form.asunto}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="afiliacion">Proceso de afiliación</option>
                      <option value="capacitacion">Inscripción a cursos</option>
                      <option value="certificados">Certificados y documentos</option>
                      <option value="informacion">Información general</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-mono text-forest-500 uppercase tracking-wider mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu consulta aquí..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-forest-400">
                    * Campos obligatorios. Tu información es tratada con confidencialidad.
                  </p>
                  <button
                    type="submit"
                    disabled={enviando}
                    className="flex items-center gap-2 px-6 py-3 bg-forest-700 hover:bg-forest-800 text-cream-100 text-sm font-medium rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {enviando ? (
                      <>
                        <span className="w-4 h-4 border-2 border-cream-100/30 border-t-cream-100 rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden bg-forest-800 relative" style={{ aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80&fit=crop"
                alt="Mapa de ubicación - Riobamba, Chimborazo"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-cream-100">
                  <MapPin size={28} className="mx-auto mb-2 text-copper-400" />
                  <p className="font-display text-base font-medium">Riobamba, Chimborazo</p>
                  <p className="text-xs text-cream-300 mt-1">Ver en Google Maps</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Virgilio+Corral+Jose+Maria+Banderas+Riobamba"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label="Ver en Google Maps"
              />
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              {[
                {
                  icon: MapPin,
                  titulo: 'Dirección',
                  texto: 'Virgilio Corral y José María Banderas\nUrb. Las Retamas, Mz H\nRiobamba, Chimborazo',
                },
                {
                  icon: Phone,
                  titulo: 'Teléfono',
                  texto: '03-2306007',
                  href: 'tel:032306007',
                },
                {
                  icon: Clock,
                  titulo: 'Atención al público',
                  texto: 'Lunes a Viernes\n08:00 – 12:30 · 14:30 – 17:30',
                },
                {
                  icon: ExternalLink,
                  titulo: 'Redes sociales',
                  texto: 'facebook.com/Col.Cont.Chimborazo',
                  href: 'https://www.facebook.com/Col.Cont.Chimborazo',
                },
              ].map(({ icon: Icon, titulo, texto, href }, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-cream-50 border border-cream-300 rounded-xl">
                  <div className="w-9 h-9 bg-forest-700/8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-forest-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-forest-400 uppercase tracking-wider mb-1">{titulo}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-forest-700 hover:text-forest-800 font-medium transition-colors"
                      >
                        {texto}
                      </a>
                    ) : (
                      <p className="text-sm text-forest-700 leading-relaxed whitespace-pre-line">{texto}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
