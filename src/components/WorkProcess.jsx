import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Discovery', desc: 'Memahami bisnis, target audience, dan goals Anda melalui diskusi mendalam.' },
  { num: '02', title: 'Design', desc: 'Membuat wireframe & mockup visual yang sesuai dengan brand identity Anda.' },
  { num: '03', title: 'Develop', desc: 'Coding dengan teknologi modern, clean code, dan best practices.' },
  { num: '04', title: 'Deliver', desc: 'Testing, optimasi, launch, dan training penggunaan website Anda.' },
]

export default function WorkProcess() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false,
      })
    }, ref)
    
    setTimeout(() => ScrollTrigger.refresh(), 500)
    
    return () => ctx.revert()
  }, [])

  return (
    <section className="section process" id="process" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Proses Kerja Kami</h2>
          <p className="section-desc">Empat langkah sederhana dari ide hingga website Anda live dan siap menarik pelanggan.</p>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="step-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
