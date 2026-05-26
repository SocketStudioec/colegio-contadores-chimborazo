import Header from './components/Header'
import Hero from './components/Hero'
import SobreNosotros from './components/SobreNosotros'
import Servicios from './components/Servicios'
import Directiva from './components/Directiva'
import Capacitacion from './components/Capacitacion'
import Noticias from './components/Noticias'
import Beneficios from './components/Beneficios'
import CTAAfiliacion from './components/CTAAfiliacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-200">
      <Header />
      <main>
        <Hero />
        <SobreNosotros />
        <Servicios />
        <Directiva />
        <Capacitacion />
        <Noticias />
        <Beneficios />
        <CTAAfiliacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
