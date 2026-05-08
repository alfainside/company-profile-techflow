import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image-box', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out',
        immediateRender: false,
      })
      gsap.from('.about-content > *', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
        immediateRender: false,
      })
    }, ref)
    
    setTimeout(() => ScrollTrigger.refresh(), 500)
    
    return () => ctx.revert()
  }, [])

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about-image">
          <div className="about-image-box">
            <div className="about-visual" />
            <span className="about-logo">Techflow</span>
          </div>
          <div className="about-float">
            <div className="af-number">5+</div>
            <div className="af-label">Years Experience</div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Partner Digital Terpercaya untuk Bisnis Anda</h2>
          <p className="section-desc">
            Techflow Digital adalah studio solusi digital yang berfokus pada pembuatan website berkualitas tinggi untuk berbagai jenis bisnis. Kami percaya bahwa setiap bisnis layak memiliki kehadiran digital yang profesional dan memukau.
          </p>
          <p className="section-desc">
            Dengan tim yang berpengalaman dalam desain dan teknologi terkini, kami menghadirkan website yang tidak hanya cantik tapi juga fungsional dan menghasilkan.
          </p>
          <ul className="about-list">
            <li><span className="check">✓</span>Tim profesional & berpengalaman</li>
            <li><span className="check">✓</span>Teknologi modern (React, Next.js, dll)</li>
            <li><span className="check">✓</span>Harga transparan & kompetitif</li>
            <li><span className="check">✓</span>Free konsultasi & revisi</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
