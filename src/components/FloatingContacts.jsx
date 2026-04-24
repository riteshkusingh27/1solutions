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
        <svg viewBox="0 0 24 24" className="contact-icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5.9.4.4.7.9.9 1.5.2.5.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.5-.4.4-.9.7-1.5.9-.5.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.5-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.5.4-.4.9-.7 1.5-.9.5-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 0S5.1.1 4.5.3c-.8.2-1.6.6-2.3 1.3C1.5 2.3 1.1 3.1.9 3.9.7 4.5.6 5.3.6 7c0 1.3 0 1.7 0 5s0 3.7.1 5c.1 1.7.2 2.5.4 3.1.2.8.6 1.6 1.3 2.3.7.7 1.5 1.1 2.3 1.3.6.2 1.4.3 3.1.4 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.7-.1 2.5-.2 3.1-.4.8-.2 1.6-.6 2.3-1.3.7-.7 1.1-1.5 1.3-2.3.2-.6.3-1.4.4-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.7-.2-2.5-.4-3.1-.2-.8-.6-1.6-1.3-2.3-.7-.7-1.5-1.1-2.3-1.3C18.9.1 18.1 0 16.4 0 15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.5a1.45 1.45 0 100 2.9 1.45 1.45 0 000-2.9z"
          />
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
