import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import WorkProcess from './components/WorkProcess'
import Portfolio from './components/Portfolio'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <WorkProcess />
        <Portfolio />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
