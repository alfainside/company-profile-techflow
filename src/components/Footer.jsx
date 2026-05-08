export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <div className="logo-icon">F</div>
              <span>Techflow Digital</span>
            </a>
            <p>Studio solusi digital terpercaya untuk membantu bisnis Anda tampil profesional di era digital.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Company Profile</a>
            <a href="#services">E-Commerce</a>
            <a href="#services">Restaurant & UMKM</a>
            <a href="#services">Custom Web App</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">WhatsApp</a>
            <a href="#">Dribbble</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Techflow Digital. All rights reserved.</span>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
