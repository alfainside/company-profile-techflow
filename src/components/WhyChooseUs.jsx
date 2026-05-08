import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const reasons = [
  { num: '01', title: 'Desain Premium & Modern', desc: 'Setiap project dikerjakan dengan standar desain tinggi, bukan template murahan. Kami memastikan website Anda tampil menonjol.' },
  { num: '02', title: 'Mobile-First & Responsive', desc: 'Website kami dibangun mobile-first sehingga tampil sempurna di semua perangkat — dari smartphone hingga desktop.' },
  { num: '03', title: 'SEO & PerTechflownce Optimized', desc: 'Kecepatan dan SEO bukan afterthought. Kami optimize dari awal agar website Anda mudah ditemukan di Google.' },
  { num: '04', title: 'Support & Maintenance', desc: 'Kami tidak berhenti setelah launch. Dukungan teknis dan maintenance berkala memastikan website Anda selalu prima.' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false,
      })
    }, ref)
    
    setTimeout(() => ScrollTrigger.refresh(), 500)
    
    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="why-us" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Kenapa Techflow Digital?</h2>
          <p className="section-desc">Kami bukan sekadar web developer — kami partner digital yang memahami kebutuhan bisnis Anda.</p>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <span className="why-number">{r.num}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
