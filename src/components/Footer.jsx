const Footer = () => (
  <footer className="px-6 pb-12 pt-10">
    <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1c3d] via-[#102750] to-[#0891b2] p-[1px] shadow-lg ">
      <div className="flex flex-col gap-8 rounded-[22px] bg-white/90 px-6 py-8 sm:mb-20 text-slate-900 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">One Solutions</p>
          <p className="text-lg font-semibold text-slate-900">Design partners for bold digital experiences.</p>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} OneSolutions. Crafted with care.</p>
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
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
