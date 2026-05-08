import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-info > *', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        opacity: 0, x: -30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      })
      gsap.from('.contact-form > *', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        opacity: 0, y: 20, stagger: 0.08, duration: 0.5, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.')
    e.target.reset()
  }

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Contact Us</span>
            <h2 className="section-title">Mari Diskusikan Project Anda</h2>
            <p className="section-desc">Hubungi kami untuk konsultasi gratis. Ceritakan kebutuhan website Anda dan kami akan memberikan solusi terbaik.</p>
            <div className="contact-item">
              <div className="ci-icon">📧</div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">hello@Techflowdigital.id</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">📱</div>
              <div>
                <div className="ci-label">WhatsApp</div>
                <div className="ci-value">+62 812-3456-7890</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">📍</div>
              <div>
                <div className="ci-label">Location</div>
                <div className="ci-value">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" placeholder="Nama lengkap Anda" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Jenis project yang diinginkan" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" placeholder="Ceritakan tentang project Anda..." required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Kirim Pesan →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
