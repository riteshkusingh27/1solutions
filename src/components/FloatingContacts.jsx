const FloatingContacts = () => {
  return (
    <div className="floating-contacts" aria-label="Quick contact">
      <a className="contact-btn" href="tel:+919886951614" aria-label="Call us">
        <img src="/c2.png" alt="" className="contact-icon" aria-hidden />
      </a>
      <a
        className="contact-btn"
        href="https://onesolutions.tech"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit our Instagram"
      >
        <svg viewBox="0 0 24 24" className="contact-icon instagram-icon" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      </a>
      <a
        className="contact-btn"
        href="https://wa.me/9886951614"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src="/c1.png" alt="" className="contact-icon" aria-hidden />
      </a>
    </div>
  )
}

export default FloatingContacts
