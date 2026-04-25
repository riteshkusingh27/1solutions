const BlogPostActions = () => {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex flex-wrap gap-3">
        <a className="btn-primary" href="/#contact">
          Get quote
        </a>
        <a className="btn-secondary" href="/#services">
          Services
        </a>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
        <a href="tel:+919886951614" className="underline decoration-slate-300 underline-offset-4">
          Call
        </a>
        <a href="https://onesolutions.tech" target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-4">
          Instagram
        </a>
        <a href="https://wa.me/9886951614" target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-4">
          WhatsApp
        </a>
      </div>
    </section>
  )
}

export default BlogPostActions
