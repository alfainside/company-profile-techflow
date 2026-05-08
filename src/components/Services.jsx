import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: '🌐', title: 'Company Profile', desc: 'Website profesional yang merepresentasikan identitas brand Anda dengan desain modern dan user-friendly.' },
  { icon: '🛒', title: 'E-Commerce Website', desc: 'Toko online lengkap dengan payment gateway, inventory management, dan optimasi konversi.' },
  { icon: '🍽️', title: 'Restaurant & UMKM', desc: 'Website khusus resto & UMKM dengan menu digital, online ordering, dan integrasi WhatsApp.' },
  { icon: '⚙️', title: 'Custom Web App', desc: 'Aplikasi web custom sesuai kebutuhan bisnis: dashboard, CRM, booking system, dan lainnya.' },
  { icon: '🚀', title: 'Landing Page', desc: 'Halaman landing yang high-converting untuk campaign marketing, produk launch, dan lead generation.' },
  { icon: '🎨', title: 'Website Redesign', desc: 'TransTechflowsi website lama Anda menjadi modern, cepat, responsive, dan SEO-friendly.' },
]

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
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
    <section className="section services" id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Solusi Digital untuk Setiap Kebutuhan</h2>
          <p className="section-desc">Kami menyediakan berbagai layanan web development yang dirancang khusus untuk membantu bisnis Anda tumbuh di dunia digital.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
