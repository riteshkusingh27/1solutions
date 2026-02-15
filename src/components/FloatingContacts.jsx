const FloatingContacts = () => {
  return (
    <div className="floating-contacts" aria-label="Quick contact">
      <a className="contact-btn" href="tel:+919886951614" aria-label="Call us">
        <img src="/c2.png" alt="" className="contact-icon" aria-hidden />
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
