import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Products from './components/Products'
import Manufacturing from './components/Manufacturing'
import Quality from './components/Quality'
import WhyUs from './components/WhyUs'
import Markets from './components/Markets'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Manufacturing />
        <Quality />
        <WhyUs />
        <Markets />
        <Journey />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
