import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-box', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        opacity: 0, scale: 0.95, duration: 0.8, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="cta-section" ref={ref}>
      <div className="cta-box">
        <h2>Siap Memulai Project Digital Anda?</h2>
        <p>Konsultasikan kebutuhan website Anda secara gratis. Kami siap membantu mewujudkan visi digital bisnis Anda.</p>
        <a href="#contact" className="btn">Hubungi Kami Sekarang →</a>
      </div>
    </section>
  )
}
