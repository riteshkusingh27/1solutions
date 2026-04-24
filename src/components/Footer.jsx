const Footer = () => (
  <footer className="px-6 pb-12 pt-10">
    <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1c3d] via-[#102750] to-[#0891b2] p-[1px] shadow-lg ">
      <div className="flex flex-col gap-8 rounded-[22px] bg-white/90 px-6 py-8 sm:mb-20 text-slate-900 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">One Solutions</p>
          <p className="text-lg font-semibold text-slate-900">Design partners for bold digital experiences.</p>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} OneSolutions. Crafted with care.</p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mt-4">Address</p>
          <div className="max-w-sm text-sm text-slate-700" w-rap="break-word">
            <address className="not-italic text-sm text-slate-700">
            BHIVE Workspace - No.112, AKR Tech Park, B Block, 7th Mile Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068
          </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-800">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Talk to us</p>
          <a className="font-semibold text-[#0b1c3d] hover:text-[#0891b2]" href="tel:+1234567890">
            +91 98869 51614
          </a>
          <a className="font-semibold text-[#0b1c3d] hover:text-[#0891b2]" href="mailto:contact@onesolutions.tech">
            contact@onesolutions.tech
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-800 sm:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Explore</p>
          <a className="font-semibold text-[#0b1c3d] hover:text-[#0891b2]" href="#services">
            Services
          </a>
          <a className="font-semibold text-[#0b1c3d] hover:text-[#0891b2]" href="#contact">
            Contact
          </a>
          <a className="btn-primary mt-1" href="#contact">
            Start a project
          </a>
          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Follow</p>
            <a
              className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0b1c3d] transition hover:-translate-y-0.5 hover:border-[#0891b2] hover:text-[#0891b2]"
              href="https://onesolutions.tech"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow One Solutions on Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5.9.4.4.7.9.9 1.5.2.5.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.5-.4.4-.9.7-1.5.9-.5.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-.9-.4-.4-.7-.9-.9-1.5-.2-.5-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.5.4-.4.9-.7 1.5-.9.5-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 0S5.1.1 4.5.3c-.8.2-1.6.6-2.3 1.3C1.5 2.3 1.1 3.1.9 3.9.7 4.5.6 5.3.6 7c0 1.3 0 1.7 0 5s0 3.7.1 5c.1 1.7.2 2.5.4 3.1.2.8.6 1.6 1.3 2.3.7.7 1.5 1.1 2.3 1.3.6.2 1.4.3 3.1.4 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.7-.1 2.5-.2 3.1-.4.8-.2 1.6-.6 2.3-1.3.7-.7 1.1-1.5 1.3-2.3.2-.6.3-1.4.4-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.7-.2-2.5-.4-3.1-.2-.8-.6-1.6-1.3-2.3-.7-.7-1.5-1.1-2.3-1.3C18.9.1 18.1 0 16.4 0 15.1 0 14.7 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.5a1.45 1.45 0 100 2.9 1.45 1.45 0 000-2.9z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
