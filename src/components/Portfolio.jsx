import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'Restoran Nusantara', type: 'Restaurant Website', tag: 'Restaurant', color: '#6C5CE7' },
  { title: 'Fashion Store ID', type: 'E-Commerce Platform', tag: 'E-Commerce', color: '#00D2FF' },
  { title: 'PT Maju Bersama', type: 'Company Profile', tag: 'Corporate', color: '#a29bfe' },
  { title: 'Kopi Kita App', type: 'Custom Web Application', tag: 'Web App', color: '#6C5CE7' },
  { title: 'Gadget Launch', type: 'Landing Page', tag: 'Landing Page', color: '#00D2FF' },
  { title: 'Travel Explorer', type: 'Website Redesign', tag: 'Redesign', color: '#a29bfe' },
]

function PortfolioThumb({ color, title }) {
  return (
    <div className="portfolio-thumb" style={{ background: `linear-gradient(135deg, ${color}33, ${color}66)` }}>
      <div style={{
        width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '4rem', opacity: 0.7, fontWeight: 800, fontFamily: 'var(--font-display)', color: '#fff',
        textShadow: `0 0 20px ${color}`
      }}>
        {title.charAt(0)}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false,
      })
    }, ref)
    
    setTimeout(() => ScrollTrigger.refresh(), 500)
    
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="portfolio" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Portfolio & Capabilities</h2>
          <p className="section-desc">Beberapa contoh project yang menggambarkan kemampuan dan kualitas kerja kami.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div className="portfolio-card" key={i}>
              <PortfolioThumb color={p.color} title={p.title} />
              <div className="portfolio-overlay">
                <span>{p.tag}</span>
              </div>
              <div className="portfolio-info">
                <h3>{p.title}</h3>
                <p>{p.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
