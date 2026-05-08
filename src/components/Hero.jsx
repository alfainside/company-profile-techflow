import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-badge', { opacity: 0, y: 30, duration: 0.6 })
        .from('.hero h1', { opacity: 0, y: 40, duration: 0.8 }, '-=0.3')
        .from('.hero-desc', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
        .from('.hero-buttons', { opacity: 0, y: 30, duration: 0.6 }, '-=0.3')
        .from('.hero-stats .stat', { opacity: 0, y: 20, stagger: 0.15, duration: 0.5 }, '-=0.3')
        .from('.floating-card', { opacity: 0, scale: 0.8, stagger: 0.2, duration: 0.7, ease: 'back.out(1.5)' }, '-=0.5')

      // Floating animation for cards
      gsap.to('.fc1', { y: -15, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.fc2', { y: 12, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 })
      gsap.to('.fc3', { y: -10, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="glow-orb hero-glow1" />
      <div className="glow-orb hero-glow2" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Digital Solution Studio
          </div>
          <h1>
            We Build <span className="gradient-text">Digital Experiences</span> That Drive Growth
          </h1>
          <p className="hero-desc">
            Techflow Digital membantu bisnis Anda tampil profesional di era digital. Dari company profile hingga ecommerce — kami wujudkan website impian Anda.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Start Your Project →</a>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">40+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-grid">
            <div className="floating-card fc1">
              <div className="fc-icon">🌐</div>
              <div>
                <div className="fc-title">Company Profile</div>
                <div className="fc-sub">Professional & Modern</div>
              </div>
            </div>
            <div className="floating-card fc2">
              <div className="fc-icon">🛒</div>
              <div>
                <div className="fc-title">E-Commerce</div>
                <div className="fc-sub">Boost Your Sales</div>
              </div>
            </div>
            <div className="floating-card fc3">
              <div className="fc-icon">⚡</div>
              <div>
                <div className="fc-title">Custom Web App</div>
                <div className="fc-sub">Tailored Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
